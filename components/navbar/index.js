import { useSession } from "next-auth/react";
import Brand from "../brand";
import { Container, MobileNavSection, Navitem, Navlink, Section, WebNavSection } from "./styles";
import { RiCompassLine, RiHomeLine, RiLogoutCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { FiVideo } from 'react-icons/fi';
import { BiUserCheck, BiUserCircle } from 'react-icons/bi';
import colorMap from "../../styles/ui/utility/color-config";

const Navbar = () => {
    const { data : session, status } = useSession();

    const isAuthenticated = status === "authenticated";

    const iconSize = 23;
    const iconColor = colorMap['secondary'].normal;

    const guestNavs = [
        // {
        //     id: 'guest',
        //     name: 'Guest',
        //     path: '/',
        // },
        {
            id: 'login',
            name: 'Login',
            path: '/login',
            icon: 'Login',
        },
        {
            id: 'signup',
            name: 'Signup',
            path: '/signup',
            icon: 'Signup',
        }
    ];

    const authNavs = [
        {
            id: 'home',
            name: 'Home',
            path: '/',
            icon: <RiHomeLine size={iconSize} />,
        },
        {
            id: 'explore',
            name: 'Explore',
            path: '/explore',
            icon: <RiCompassLine size={iconSize} />,
        },
        {
            id: 'stream',
            name: 'Stream',
            path: '/stream',
            icon: <FiVideo size={iconSize} />,
        },
        {
            id: 'profile',
            name: 'Profile',
            path: '/profile',
            icon: <BiUserCircle size={iconSize} />,
        },
        {
            id: 'logout',
            name: 'Logout',
            path: '/logout',
            icon: <RiLogoutCircleRLine size={iconSize} />,
        },
    ];

    const navs = isAuthenticated ? authNavs : guestNavs;

    return (
        <Container>
            <Section>
                <Navitem>
                    <Navlink href={'/home'}>
                        <Brand />
                    </Navlink>
                </Navitem>
            </Section>
            <WebNavSection>
                {
                    navs.map(({ id, name, path }) => (
                        <Navitem key={id}>
                            <Navlink href={path}>
                                {name}
                            </Navlink>
                        </Navitem>
                    ))
                }
            </WebNavSection>
            <MobileNavSection>
                {
                    navs.map(({ id, icon, path }) => (
                        <Navitem key={id}>
                            <Navlink href={path}>
                                {icon}
                            </Navlink>
                        </Navitem>
                    ))
                }
            </MobileNavSection>
        </Container>
    );
}

export default Navbar;