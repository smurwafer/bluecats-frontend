import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { buildClient } from '../../axios-config';
import Profile from '../../components/profile';
import { Container, ButtonSection } from '../../styles/pages/profile';
import Button from '../../styles/ui/button';
import Space from '../../styles/ui/space';
import { header } from '../../utility/header';

const ProfilePage = ({ user, friends, channels }) => {
    const router = useRouter();

    // const user = {
    //     userName: 'Tourixt',
    //     email: 'tourixt@gmail.com',
    //     description: 'Its finally the time to visit Big Sur, I welcome you all to this great and exciting journey to the heavens!',
    //     image: '/images/profiles/profile04.jpg',
    // };
    // const friends = [{ id: 'u01', userName: 'G6Homi', image: '/images/profiles/profile04.jpg' }];
    // const channels = [{ id: 'c01', name: 'Gamerz', image: '/images/photos/photo01.jpg', subscribers: '1.3k' }];

    const goToProfileUpdate = () => {
        router.push('/profile/update');
    }

    const goToProfileDeactivate = () => {
        router.push('/profile/deactivate');
    }

    return (
        <Container>
            <Profile user={user} friends={friends} channels={channels} />
            <ButtonSection>
                <Button block onClick={goToProfileUpdate}>Update Account</Button>
                <Space horizontal={20} />
                <Button color={'danger'} block onClick={goToProfileDeactivate}>Deactivate Account</Button>
            </ButtonSection>
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

    const client = buildClient({ req });
    const { data: { channels } } = await client.get('channel?holder=' + session.currentUser.id, header(session.jwt));

    const friends = [];

    return {
        props: {
            session,
            user: session.currentUser,
            friends,
            channels,
        }
    }
}

export default ProfilePage;