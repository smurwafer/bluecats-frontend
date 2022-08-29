import { getSession } from "next-auth/react";
import Auth from "../../components/auth";
import { Container, Wrapper } from "../../styles/pages/signup";

const SignupPage = () => {
    return (
        <Container>
            <Wrapper>
                <Auth type={'signup'} />
            </Wrapper>
        </Container>
    );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (session && session.currentUser) {
    return {
      redirect: {
        destination: '/',
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

export default SignupPage;