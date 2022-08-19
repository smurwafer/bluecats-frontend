import Auth from "../../components/auth";
import { Container, Wrapper } from "./styles";

const SignupPage = () => {
    return (
        <Container>
            <Wrapper>
                <Auth type='signup' />
            </Wrapper>
        </Container>
    );
}

export default SignupPage;