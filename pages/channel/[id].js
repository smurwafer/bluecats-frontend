import { Container } from '../../styles/pages/channel/view';
import Header from '../../components/header';
import { galleryUrl } from '../../utility/media-url';
import StreamList from '../../components/stream-list';
import { getSession } from 'next-auth/react';
import { buildClient } from '../../axios-config';
import { header } from '../../utility/header';
import { updateChannel } from '../../store/actions/channel';
import { useRouter } from 'next/router';

const ChannelViewPage = ({ channel: { id, name, description, photo, theme, holders }, streams, subscribers }) => { 
    const router = useRouter();

    // const list = [
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    //     {
    //         id: 's01',
    //         title: 'GTA-V Online',
    //         url: '',
    //         gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
    //         creator: {
    //             userName: 'G6Homi',
    //             profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
    //         },
    //         views: '1.2k',
    //         live: true,
    //     },
    // ];

    const goToUpdateChannel = () => {
        router.push('/channel/update/' + id);
    }
        
    return (
        <Container>
            <Header
                title={name}
                description={description}
                backgroundUrl={galleryUrl(theme)}
                creatorUrl={galleryUrl(photo)}
                name={holders[0].userName}
                updateChannel={goToUpdateChannel}
            />
            <StreamList legend={'More Streams from ' + name} list={streams} />
            <StreamList legend={'Featured Streams of ' + name} list={streams} />
            <StreamList legend={'Most Views Streams of ' + name} list={streams} />
        </Container>
    );
}

export const getServerSideProps = async ({ req, params }) => { 
    const session = await getSession({ req });
    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
                permanent: false,
            }
        };
    }

    const { id } = params;
    const client = buildClient({ req });
    const { data: { channel } } = await client.get('channel/' + id, header(session.jwt));
    const { data: { subscriptions } } = await client.get('channel-subscriptions/' + id, header(session.jwt));
    const { data: { streams } } = await client.get('stream?channel=' + id, header(session.jwt));
    const subscribers = subscriptions.map(subscription => subscription.subscriber);
    return {
        props: {
            channel,
            subscribers,
            streams,
        },
    };
}

export default ChannelViewPage;