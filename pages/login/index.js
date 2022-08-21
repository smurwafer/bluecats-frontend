import Auth from "../../components/auth";
import { Container, Wrapper } from "../../styles/pages/login";

const LoginPage = () => {
    return (
        <Container>
            <Wrapper>
                <Auth />
            </Wrapper>
        </Container>
    );
}

export default LoginPage;