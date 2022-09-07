import dynamic from 'next/dynamic';
import { getSession } from 'next-auth/react';
import { Container } from '../../../styles/pages/stream/create';

const StreamForm = dynamic(() => import('../../../components/stream-form'), {
    ssr: false,
});

const StreamCreatePage = ({ session, channelId }) => {
    const emptyStream = {
        title: '',
        streamType: '',
        description: '',
        streamTags: [],
        gallery: [],
        live: false,
    };

    return (
        <Container>
            <StreamForm
                session={session}
                channelId={channelId}
                stream={emptyStream}
            />
        </Container>
    );
}

export const getServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });
    if (!session || !session.currentUser) {
        return {
            redirect: {
                destination: '/guest',
                permament: false,
            }
        };
    }
        
    const { channelId } = params;

    return {
        props: {
            session,
            channelId,
        }
    }
}

export default StreamCreatePage;