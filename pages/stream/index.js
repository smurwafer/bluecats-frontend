import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { buildClient } from '../../axios-config';
import ChannelCard from '../../components/channel-card';
import { Container, Legend, Text, ChannelList, ChannelItem } from '../../styles/pages/stream';
import Space from '../../styles/ui/space';
import { header } from '../../utility/header';

const StreamPage = ({ channels = [] }) => {
    const router = useRouter();

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

    const client = buildClient({ req });
    const { data: { channels } } = await client.get('channel?holder=' + session.currentUser.id, header(session.jwt));
    console.log('channels', channels);

    return {
        props: {
            session,
            channels,
        }
    }
}

export default StreamPage;