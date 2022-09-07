import { getSession } from 'next-auth/react';
import { buildClient } from '../../../axios-config';
import ChannelForm from '../../../components/channel-form';
import { Container } from '../../../styles/pages/channel/update';
import ChannelFormType from '../../../utility/category/channel-form-type';
import { header } from '../../../utility/header';

const ChannelUpdatePage = ({ session, channel }) => {
    return (
        <Container>
            <ChannelForm session={session} channel={channel} channelType={ChannelFormType.Update}  />
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

    const { id } = params;
    const client = buildClient({ req });
    const { data: { channel } } = await client.get('channel/' + id, header(session.jwt));

    return {
        props: {
            session,
            channel,
        }
    }
}

export default ChannelUpdatePage;