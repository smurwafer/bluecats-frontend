import { useRouter } from 'next/router';
import ChannelCard from '../../components/channel-card';
import { Container, Legend, Text, ChannelList, ChannelItem } from '../../styles/pages/stream';
import Space from '../../styles/ui/space';

const StreamPage = () => {
    const router = useRouter();

    const channels = [
        {
            id: 'c01',
            name: 'Gamerz',
            subscribers: '1.3k',
            image: '/images/photos/photo09.jpg',
        },
        {
            id: 'c02',
            name: 'Gamerz',
            subscribers: '1.3k',
            image: '/images/photos/photo09.jpg',
        },
        {
            id: 'c03',
            name: 'Gamerz',
            subscribers: '1.3k',
            image: '/images/photos/photo09.jpg',
        },
        {
            id: 'c04',
            name: 'Gamerz',
            subscribers: '1.3k',
            image: '/images/photos/photo09.jpg',
        },
    ];

    const goToChannelCreate = () => {
        router.push('/channel/create');
    }

    const goToStreamCreate = () => {
        router.push('/stream/create');
    }

    return (
        <Container>
            <Legend>Your Channels</Legend>
            <Text>Choose a channel to stream your content or Create a new channel.</Text>
            <ChannelList>
                <ChannelItem key={'create-channel'}>
                    <ChannelCard create={true} onClick={goToChannelCreate} />
                </ChannelItem>
                {channels.map(channel => (
                    <ChannelItem key={channel.id}>
                        <ChannelCard item={channel} onClick={goToStreamCreate} />
                    </ChannelItem>
                ))}
            </ChannelList>
        </Container>
    );
}

export default StreamPage;