import Brand from '../../components/brand';
import { BrandContainer, Container } from '../../styles/pages/splash';

const SplashPage = () => {
    return (
        <Container>
            <BrandContainer>
                <Brand fontSize={77} />
            </BrandContainer>
        </Container>
    );
}

export default SplashPage;