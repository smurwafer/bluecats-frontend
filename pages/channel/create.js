import { getSession } from 'next-auth/react';
import { Container } from '../../styles/pages/channel/create';
import ChannelForm from '../../components/channel-form';

const CreatePage = ({ session }) => {
    const emptyChannel = {
        name: '',
        type: '',
        description: '',
        photo: {
            url: '',
            caption: '',
            type: 'image',
            isResourceUrl: true,
        },
        theme: {
            url: '',
            caption: '',
            type: 'image',
            isResourceUrl: true,
        },
        hashtags: [],
        holders: [],
    };

    return (
        <Container>
            <ChannelForm session={session} channel={emptyChannel} />
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

export default CreatePage;
