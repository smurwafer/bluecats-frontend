import { ButtonSection, Container, Section, Text } from '../../styles/pages/logout';
import Button from '../../styles/ui/button';
import Space from '../../styles/ui/space';

const LogoutPage = () => {
    return (
        <Container>
            <Section>
                <Text>Are you sure want to Logout?</Text>
                <Space vertical={20} />
                <ButtonSection>
                    <Button size={'small'} block>Yes</Button>
                    <Space horizontal={10} />
                    <Button size={'small'} color={'danger'} block>No</Button>
                </ButtonSection>
            </Section>
        </Container>
    );
}

export default LogoutPage;