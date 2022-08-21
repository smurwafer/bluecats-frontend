import { useRouter } from 'next/router';
import ChannelCard from '../../components/channel-card';
import ProfileCard from '../../components/profile-card';
import { Container, ButtonSection, ChannelList, Description, Display, Email, FriendList, Info, Legend, LowerSection, MiddleSection, UpperSection, UserName } from '../../styles/pages/profile';
import Button from '../../styles/ui/button';
import Image from '../../styles/ui/image';
import Space from '../../styles/ui/space';

const ProfilePage = () => {
    const router = useRouter();

    const user = {
        userName: 'Tourixt',
        email: 'tourixt@gmail.com',
        description: 'Its finally the time to visit Big Sur, I welcome you all to this great and exciting journey to the heavens!',
        image: '/images/profiles/profile04.jpg',
    };
    const friends = [{ id: 'u01', userName: 'G6Homi', image: '/images/profiles/profile04.jpg' }];
    const channels = [{ id: 'c01', name: 'Gamerz', image: '/images/photos/photo01.jpg', subscribers: '1.3k' }];

    const goToProfile = (id) => {
        router.push('/profile/' + id);
    }

    const goToChannel = (id) => {
        router.push('/channel/' + id);
    }

    const goToProfileUpdate = () => {
        router.push('/profile/update');
    }

    const goToProfileDeactivate = () => {
        router.push('/profile/deactivate');
    }

    return (
        <Container>
            <UpperSection>
                <Display>
                    <Image src={user.image} alt={user.userName} />
                </Display>
                <Space horizontal={40} />
                <Info>
                    <UserName>{user.userName}</UserName>
                    <Space vertical={10} />
                    <Email>{user.email}</Email>
                    <Space vertical={10} />
                    <Description>{user.description}</Description>
                </Info>
            </UpperSection>
            <Space vertical={40} />
            <MiddleSection>
                <Legend>Friends</Legend>
                <Space vertical={20} />
                <FriendList>
                    {friends.map(friend => (
                        <ProfileCard key={friend.id} item={friend} onClick={() => goToProfile(friend.id)} />
                    ))}
                </FriendList>
            </MiddleSection>
            <Space vertical={40} />
            <LowerSection>
                <Legend>Your Channels</Legend>
                <Space vertical={20} />
                <ChannelList>
                    {
                        channels.map(channel => (
                            <ChannelCard key={channel.id} item={channel} onClick={() => goToChannel(channel.id)} />
                        ))  
                    }
                </ChannelList>
                <Space vertical={40} />
                <ButtonSection>
                    <Button block onClick={goToProfileUpdate}>Update Account</Button>
                    <Space horizontal={20} />
                    <Button color={'danger'} block onClick={goToProfileDeactivate}>Deactivate Account</Button>
                </ButtonSection>
            </LowerSection>
        </Container>
    );
}

export default ProfilePage;