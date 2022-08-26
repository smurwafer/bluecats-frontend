import { getSession } from 'next-auth/react';
import { useState } from 'react';
import CommentTool from '../../components/comment-tool';
import StreamList from '../../components/stream-list';
import StreamViewer from '../../components/stream-viewer';
import { Container, UpperSection, StreamSection, CommentSection, LowerSection } from '../../styles/pages/stream/view';
import Space from '../../styles/ui/space';

const StreamViewPage = ({ stream }) => {
    const [comments, setComments] = useState([
        {
            id: 'cm01',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            },
        },
        {
            id: 'cm02',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
        {
            id: 'cm03',
            text: 'Oh that great!',
            timestamp: '1 min ago',
            commentor: {
                id: 'u01',
                userName: 'G6Homi',
                image: '/images/photos/photo01.jpg',
            }
        },
    ]);
    const [recommendedList, setRecommendList] = useState([]);

    console.log(stream);

    const onComment = (id) => { }
    
    const list = [
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    ];

    return (
        <Container>
            <UpperSection>
                <StreamSection>
                    <StreamViewer stream={stream} />
                </StreamSection>
                <CommentSection>
                    <CommentTool comments={comments} onComment={onComment} />
                </CommentSection>
            </UpperSection>
            <Space vertical={20} />
            <LowerSection>
                <StreamList legend={'Related Streams'} list={list} />
            </LowerSection>
        </Container>
    );
}

export const getServerSideProps = async () => { 
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
            stream: {
                id: 's01',
                title: 'GTA-V Online',
                url: '/images/photos/photo01.jpg',
                creator: {
                    id: 'c01',
                    name: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                description: 'Hello  Guys, Today we are playing GTA-V online, Hope you all will enjoy the streaming, Please make sure to subscribe to the channel and like the stream, also share it with your friends and collegues. Thanks fo watching.',
                live: true,
            }
        }
    }; 
}

export default StreamViewPage;