import Brand from "../brand";
import { Container, Navitem, Navlink, Section } from "./styles";

const Navbar = () => {
    const isAuthenticated = true;

    const guestNavs = [
        {
            id: 'guest',
            name: 'Guest',
            path: '/',
        },
        {
            id: 'login',
            name: 'Login',
            path: '/login',
        },
        {
            id: 'signup',
            name: 'Signup',
            path: '/signup',
        }
    ];

    const authNavs = [
        {
            id: 'home',
            name: 'Home',
            path: '/',
        },
        {
            id: 'explore',
            name: 'Explore',
            path: '/explore',
        },
        {
            id: 'stream',
            name: 'Stream',
            path: '/stream',
        },
        {
            id: 'profile',
            name: 'Profile',
            path: '/profile',
        },
        {
            id: 'logout',
            name: 'Logout',
            path: '/logout',
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
            <Section>
                {
                    navs.map(({ id, name, path }) => (
                        <Navitem key={id}>
                            <Navlink href={path}>
                                {name}
                            </Navlink>
                        </Navitem>
                    ))
                }
            </Section>
        </Container>
    );
}

export default Navbar;