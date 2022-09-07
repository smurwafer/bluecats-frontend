import AgoraRTC from 'agora-rtc-sdk-ng';
import { Alert, message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { BsFillPersonCheckFill, BsFlag, BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import socket from '../../socket.io-config';
import { addComment } from '../../store/actions';
import Account from "../../styles/ui/account";
import Image from '../../styles/ui/image';
import Space from '../../styles/ui/space';
import AccountType from "../../styles/ui/utility/category/account-type";
import colorMap from "../../styles/ui/utility/color-config";
import { errConfig } from '../../utility/error-config';
import { galleryUrl } from '../../utility/media-url';
import { generateUniqueID } from '../../utility/unique-id';
import CommentTool from '../comment-tool';
import { ActionItem, ActionList, ActionText, CommentSection, Container, Description, Display, Info, Name, Profile, StreamDisplay, StreamSection, TextContainer, Title } from "./styles";

const client = AgoraRTC.createClient({
    mode: 'live',
    role: 'audience',
    codec: 'h264',
});

const StreamViewer = ({ stream: { id, title, description, thumbnail, gallery, channel, hashtags, live }, comments = [], session }) => { 
    const dispatch = useDispatch();
    const router = useRouter();
    const iconSize = 19;
    const iconColor = colorMap['secondary'].normal;

    const [isLiked, setIsLiked] = useState(false); 
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);
    const [streaming, setStreaming] = useState(false);

    const [commentList, setCommentList] = useState(comments);
    
    const uid = generateUniqueID();
    const appId = '6205a851406348639c8462785b79d280';

    client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'audio') {
            const audioTrack = user.audioTrack;
            audioTrack.play();
        } else {
            const videoTrack = user.videoTrack;
            videoTrack.play('stream-viewer');
        }
        setStreaming(true);
    });

    client.on('user-unpublished', async (user, mediaType) => {
        await client.unsubscribe(user, mediaType);
        setStreaming(false);
    });

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
        console.log('stream viewer connection state', connectionState);
        console.log('stream viewer remote users', remoteUsers);
    }, [connectionState, remoteUsers]);

    useEffect(() => {
        (async () => { await joinChannel() })();
    }, []);

    useEffect(() => {
        socket.on('join-success', async () => { 
            const commentData = {
                text: `${session.currentUser.userName} joined`,
                stream: id,
                commentor: session.currentUser.id,
            };
            await dispatch(addComment(session.jwt, commentData));
        });

        socket.on('comment', (comment) => {
            setCommentList(prevState => { 
                const newComments = [...prevState, comment];
                return newComments;
            });
        });

        socket.on('leave-success', async () => {
            const commentData = {
                text: `${session.currentUser.userName} left`,
                stream: id,
                commentor: session.currentUser.id,
            };
            await dispatch(addComment(session.jwt, commentData));
        });
    }, []);

    useEffect(() => {
        window.addEventListener('beforeunload', leaveChannel);
        return () => {
            window.removeEventListener('beforeunload', leaveChannel);
        }
    }, []);

    const fetchToken = async () => {
        try {
            const { data: { token } } = await axios.post('http://localhost:8082/fetch_rtc_token', {
                uid, 
                channelName: channel.id,
                role: 2,
            }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            return token;
        } catch (err) {
            throw err;
        }
    }

    const joinChannel = async (token) => {
        try {
            // const appId = process.env.AGORA_APP_ID;
            if(!token)
                token = await fetchToken(uid);
            await client.join(appId, channel.id, token, uid);
            socket.emit('join', id);
        } catch (err) {
            console.log(err);
            message.error('Error joining stream!');
        }
    }

    const leaveChannel = async () => {
        try {
            Alert({
                message: 'leaving stream',
            });
            socket.emit('leave', id);
            await client.unsubscribe();
            await client.leave();
        } catch (err) {
            console.log(err);
            message.error('Error leaving stream!');
        }
    }

    const onComment = async (text) => { 
        try {
            await dispatch(addComment(session.jwt, {
                text,
                stream: id,
            }));
        } catch (err) {
            message.error(errConfig(err, 'Error sending comment!'));
        }
    }

    const goToChannel = () => {
        router.push('/channel/' + channel.id);
    }

    const clickLikeHandler = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(prevState => prevState - 1);
        } else {
            setIsLiked(true);
            setLikes(prevState => prevState + 1);
        }
    }

    const clickShareHandler = () => { }
    
    const clickFlagHandler = () => { }

    return (
        <Container>
            <StreamSection>
                <Display>
                    <StreamDisplay id={'stream-viewer'} backgroundUrl={galleryUrl(thumbnail)} />
                </Display>
                <ActionList>
                    <ActionItem>
                        {isLiked ? <BsHeartFill color={colorMap['danger'].normal} size={iconSize} onClick={clickLikeHandler} /> : <BsHeart color={iconColor} size={iconSize} onClick={clickLikeHandler} />}
                        <Space horizontal={10} />
                        <ActionText>{likes}</ActionText>
                    </ActionItem>
                    <ActionItem>
                        <BsFillPersonCheckFill color={iconColor} size={iconSize} />
                        <Space horizontal={10} />
                        <ActionText>{views}</ActionText>
                    </ActionItem>
                    <ActionItem>
                        <BsShareFill color={iconColor} size={iconSize} onClick={clickShareHandler} />
                    </ActionItem>
                    <Space flexed />
                    <ActionItem>
                        <BsFlag color={iconColor} size={iconSize} onClick={clickFlagHandler} />
                    </ActionItem>
                </ActionList>
                <Space vertical={20} />
                <Info>
                    <Profile>
                        <Account url={galleryUrl(channel.photo)} type={AccountType.Square} size={40} onClick={goToChannel} />
                    </Profile> 
                    <Space horizontal={10} />
                    <TextContainer>
                        <Title>{title}</Title>
                        <Name>{channel.name}</Name>
                    </TextContainer>
                </Info>
                <Space vertical={20} />
                <Description>
                    {description}
                </Description>
            </StreamSection>
            <CommentSection>
                <CommentTool comments={commentList} onComment={onComment} />
            </CommentSection>
        </Container>
    );
}

export default StreamViewer;