import { useSession } from "next-auth/react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import SplashPage from "../../pages/splash";
import { Body, Container, FooterSection, NavbarSection } from "./styles";

const Layout = ({ children }) => {
    const { data: session, status } = useSession();

    // if (status === 'loading') {
    //     return (
    //         <Container>
    //             <SplashPage />
    //         </Container>
    //     );
    // }

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