import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Body, Container, FooterSection, NavbarSection } from "./styles";

const Layout = ({ children }) => {
    return (
        <Container>
            <NavbarSection>
                <Navbar />
            </NavbarSection>
            <Body>
                {children}
            </Body>
            <FooterSection>
                <Footer />
            </FooterSection>
        </Container>
    );
}

export default Layout;