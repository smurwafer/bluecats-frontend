import { getSession } from 'next-auth/react';
import { useState } from 'react';
import ActionCard from '../../components/action-card';
import GalleryList from '../../components/gallery-list';
import { Container, Action, Display, DisplaySection, Gallery, Info, InfoSection, PinboardContainer } from '../../styles/pages/stream/create';
import Button from '../../styles/ui/button';
import HashTags from '../../styles/ui/hashtags';
import Input from '../../styles/ui/input';
import Pinboard from '../../styles/ui/pinboard';
import Space from '../../styles/ui/space';
import ActionType from '../../utility/category/action-type';
import interestList from '../../utility/interest-list';

const StreamCreatePage = () => {
    const [title, setTitle] = useState('');
    const [streamType, setStreamType] = useState('');
    const [description, setDescription] = useState('');
    const [streamTags, setStreamTags] = useState([]);
    const [gallery, setGallery] = useState([
        { id: 'g01', image: '/images/photos/photo01.jpg', caption: 'gallery01' },
        { id: 'g02', image: '/images/photos/photo01.jpg', caption: 'gallery01' },
        { id: 'g03', image: '/images/photos/photo01.jpg', caption: 'gallery01' },
    ]);

    const startStreaming = () => {}

    return (
        <Container>
            <DisplaySection>
                <Display></Display>
                <Space vertical={20} />
                <Action>
                    <ActionCard actionType={ActionType.ShareScreen} text={'Share Screen'} />
                    <Space horizontal={10} />
                    <ActionCard actionType={ActionType.Camera} text={'Camera'} />
                </Action>
                <Space vertical={20} />
                <Gallery>
                    <GalleryList gallery={gallery} setGallery={setGallery} legend={'Gallery'} />
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
                <PinboardContainer>
                    <Pinboard bordered legend={'Stream Tags'} selectedPins={streamTags} setSelectedPins={setStreamTags} pinList={interestList} />
                    <Space vertical={20} />
                    <HashTags tags={streamTags} />
                </PinboardContainer>
                <Space vertical={20} />
                <Button onClick={startStreaming} block>Start Streaming</Button>
            </InfoSection>
        </Container>
    );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session || !session.currentUser) {
    return {
      redirect: {
        destination: '/guest',
        permament: false,
      }
    };
  }

  return {
    props: {
      session,
    }
  }
}

export default StreamCreatePage;