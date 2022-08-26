import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ButtonSection, Container, Section, Text } from '../../styles/pages/logout';
import Button from '../../styles/ui/button';
import Space from '../../styles/ui/space';

const LogoutPage = () => {
    const router = useRouter();

    const logoutHandler = async () => {
        await signOut({ redirect: false });
        router.replace('/guest');
    }

    const cancelHandler = () => {
        router.replace('/');
    }

    return (
        <Container>
            <Section>
                <Text>Are you sure want to Logout?</Text>
                <Space vertical={20} />
                <ButtonSection>
                    <Button size={'small'} block onClick={logoutHandler}>Yes</Button>
                    <Space horizontal={10} />
                    <Button size={'small'} color={'danger'} block onClick={cancelHandler}>No</Button>
                </ButtonSection>
            </Section>
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

export default LogoutPage;