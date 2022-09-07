import { useEffect, useState } from 'react';
import ActionCard from '../../components/action-card';
import GalleryList from '../../components/gallery-list';
import { Container, Action, Display, DisplaySection, Gallery, Info, InfoSection, PinboardContainer, ScreenShareDisplay, CameraDisplay } from './styles';
import Button from '../../styles/ui/button';
import HashTags from '../../styles/ui/hashtags';
import Input from '../../styles/ui/input';
import Pinboard from '../../styles/ui/pinboard';
import Space from '../../styles/ui/space';
import ActionType from '../../utility/category/action-type';
import interestList from '../../utility/interest-list';
import { message } from 'antd';
import { errConfig } from '../../utility/error-config';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { useDispatch } from 'react-redux';
import { addStream } from '../../store/actions';
import { useRouter } from 'next/router';
import axios from 'axios';
import { generateUniqueID } from '../../utility/unique-id';

const client = AgoraRTC.createClient({
    mode: 'live',
    role: 'host',
    codec: 'h264',
});

const StreamForm = ({ session, stream, channelId }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(stream.title);
    const [streamType, setStreamType] = useState(stream.streamType);
    const [description, setDescription] = useState(stream.description);
    const [streamTags, setStreamTags] = useState(stream.streamTags);
    const [gallery, setGallery] = useState(stream.gallery);
    const [activeGalleryId, setActiveGalleryId] = useState('');
    const ids = stream.gallery.map(item => item.id);
    const [galleryIds, setGalleryIds] = useState(ids);

    const [shareScreen, setShareScreen] = useState(false);
    const [camera, setCamera] = useState(false);
    const [microphone, setMicrophone] = useState(false);
    const [streamRunning, setStreamRunning] = useState(stream.live);

    const [cameraTrack, setCameraTrack] = useState();
    const [microphoneTrack, setMicrophoneTrack] = useState();
    const [screenTrack, setScreenTrack] = useState();
    
    const uid = generateUniqueID();

    client.on('token-privilege-will-expire', async () => {
        const token = await fetchToken();
        await client.renewToken(token);
    });

    client.on('token-privilege-did-expire', async () => { 
        const token = await fetchToken();
        await joinChannel(token);
    });

    const { connectionState, remoteUsers } = client;

    useEffect(() => {
        console.log('stream form connection state', connectionState);
        console.log('stream form remote users', remoteUsers);
    }, [connectionState, remoteUsers]);

    const fetchToken = async () => {
        try {
            const response = await axios.post('http://localhost:8082/fetch_rtc_token', {
                uid, 
                channelName: channelId,
                role: 1,
            }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            console.log('token received', response.data);
            return response.data.token;
        } catch (err) {
            throw err;
        }
    }

    const joinChannel = async (token = null) => {
        // const appId = process.env.AGORA_APP_ID;
        const appId = "6205a851406348639c8462785b79d280";
        try {
            if (!token)
                token = await fetchToken();
            const clientId = await client.join(appId, channelId, token, uid);
            console.log('clientId', clientId);
            message.success(`${session.currentUser.userName} successfully joined the stream`);
        } catch (err) {
            throw err;
        }
    }

    const leaveChannel = async () => {
        try {
            await client.leave();
        } catch (err) {
            throw err;
        }
    }

    const unsetTracks = () => {
        if(cameraTrack)
            cameraTrack.close();
        if(microphoneTrack)
            microphoneTrack.close();
        if(screenTrack)
            screenTrack.close();
    }

    const publishTracks = async () => {
        try {
            const tracks = [];
            if (cameraTrack) {
                tracks.push(cameraTrack);
            }
            if (microphoneTrack) {
                tracks.push(microphoneTrack);
            }
            if (screenTrack) {
                tracks.push(screenTrack);
            }
            await client.publish(tracks);
        } catch (err) {
            throw err;
        }
    }

    const unpublishTracks = async (actionType) => {
        try {
            if (!actionType) {
                await client.unpublish();
                return;
            }

            switch (actionType) {
                case ActionType.Camera:
                    await client.unpublish(cameraTrack);
                    break;
                case ActionType.Microphone:
                    await client.unpublish(microphoneTrack);
                    break;
                case ActionType.ShareScreen:
                    await client.unpublish(screenTrack);
                    break;
                default:
                    await client.unpublish();
            }
        } catch (err) {
            throw err;
        }
    }

    const startStreaming = async () => {
        try {
            await joinChannel();
            const hashtags = streamTags.map(streamTag => streamTag.value);
            const stream = await dispatch(addStream(session.jwt, {
                title,
                description,
                type: streamType,
                hashtags,
                gallery: galleryIds,
                thumbnail: activeGalleryId,
                channel: channelId,
                live: true,
            }));
            // router.push('/stream/view/' + stream.id);
            await publishTracks();
            window.open('http://localhost:3000/stream/' + stream.id, '_blank');
        } catch (err) {
            message.error(errConfig(err, 'Start streaming failed!'));
            setStreamRunning(false);
            throw err;
        }
    }

    const stopStreaming = async () => {
        try {
            await unpublishTracks();
            unsetTracks();
            await leaveChannel(); 
        } catch (err) {
            message.error(errConfig(err, 'Stop streaming failed!'));
            setStreamRunning(true);
            throw err;
        }
    }

    const toggleShareScreen = async () => {
        if (shareScreen) {
            setShareScreen(false);
            if(streamRunning)
                await unpublishTracks(ActionType.ShareScreen);
            await screenTrack.setEnabled(false);
            screenTrack.stop();
            setScreenTrack(null);
        } else {
            setShareScreen(true);
            const newScreenTrack = await AgoraRTC.createScreenVideoTrack();
            newScreenTrack.play('screen-share-display');
            setScreenTrack(newScreenTrack);
            if(streamRunning)
                await publishTracks();
        }
    }

    const toggleCamera = async () => {
        if (camera) {
            setCamera(false);
            if(streamRunning)
                await unpublishTracks(ActionType.Camera);
            await cameraTrack.setEnabled(false);
            cameraTrack.stop();
            setCameraTrack(null);
        } else {
            setCamera(true);
            const newCameraTrack = await AgoraRTC.createCameraVideoTrack();
            newCameraTrack.play('camera-display');
            setCameraTrack(newCameraTrack);
            if(streamRunning)
                await publishTracks();
        }
    }   

    const toggleMicrophone = async () => {
        if (microphone) {
            setMicrophone(false);
            if(streamRunning)
                await unpublishTracks(ActionType.Microphone);
            await microphoneTrack.setEnabled(false);
            microphoneTrack.stop();
            setMicrophoneTrack(null);
        } else {
            setMicrophone(true);
            const newMicrophoneTrack = await AgoraRTC.createMicrophoneAudioTrack();
            newMicrophoneTrack.play();
            setMicrophoneTrack(newMicrophoneTrack);
            if(streamRunning)
                await publishTracks();
        }
    }

    const streamHandler = async () => {
        try {
            if (streamRunning) {
                await stopStreaming();
                setStreamRunning(false);
            } else {
                await startStreaming();
                setStreamRunning(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <DisplaySection>
                <Display>
                    {!shareScreen && !camera && <ScreenShareDisplay />}
                    {shareScreen && <ScreenShareDisplay id='screen-share-display' />}
                    {shareScreen && camera && <Space horizontal={10} />}
                    {camera && <CameraDisplay id='camera-display' />}
                </Display>
                <Space vertical={20} />
                <Action>
                  <ActionCard
                    actionType={ActionType.ShareScreen}
                    text={'Share Screen'}
                    selected={shareScreen}
                    onClick={toggleShareScreen}
                  />
                  <Space horizontal={10} />
                  <ActionCard
                    actionType={ActionType.Camera}
                    text={'Camera'}
                    selected={camera}
                    onClick={toggleCamera}
                  />
                  <Space horizontal={10} />
                  <ActionCard
                    actionType={ActionType.Microphone}
                    text={'Microphone'}
                    selected={microphone}
                    onClick={toggleMicrophone}
                  />
                </Action>
                <Space vertical={20} />
                <Gallery>
                    <GalleryList
                        legend={'Gallery'}
                        gallery={gallery}
                        setGallery={setGallery}
                        setGalleryIds={setGalleryIds}
                        activeGalleryId={activeGalleryId}
                        setActiveGalleryId={setActiveGalleryId}
                    />
                </Gallery>
            </DisplaySection>
            <InfoSection>
                <Info>
                    <Input text={title} setText={setTitle} block placeholder={'Stream Title'} type={'text'} />
                    <Space vertical={20} />
                    <Input text={streamType} setText={setStreamType} block placeholder={'Stream Type'} type={'text'} />
                    <Space vertical={20} />
                    <Input text={description} setText={setDescription} block expand placeholder={'Stream Description'} />
                </Info>
                <Space vertical={20} />
                <PinboardContainer>
                    <Pinboard bordered legend={'Stream Tags'} size={'small'} selectedPins={streamTags} setSelectedPins={setStreamTags} pinList={interestList} />
                    <Space vertical={20} />
                    <HashTags tags={streamTags} />
                </PinboardContainer>
                <Space vertical={20} />
                <Button onClick={streamHandler} block>{streamRunning ? 'Stop' : 'Start'} Streaming</Button>
            </InfoSection>
        </Container>
    );
}

export default StreamForm;