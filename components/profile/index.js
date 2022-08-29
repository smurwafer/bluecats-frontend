import { useRouter } from 'next/router';
import ChannelCard from '../../components/channel-card';
import ProfileCard from '../../components/profile-card';
import { Container, ChannelList, Description, Display, Email, FriendList, Info, Legend, LowerSection, MiddleSection, UpperSection, UserName, InfoContainer, Label, Text } from './styles';
import Image from '../../styles/ui/image';
import Space from '../../styles/ui/space';
import HashTags from '../../styles/ui/hashtags';
import { galleryUrl } from '../../utility/media-url';

const Profile = ({ user = {}, friends = [], channels = [] }) => {
    const router = useRouter();

    const goToProfile = (id) => {
        router.push('/profile/' + id);
    }

    const goToChannel = (id) => {
        console.log(id);
        router.push('/channel/' + id);
    }

    return (
        <Container>
            <UpperSection>
                <Display>
                    <Image src={galleryUrl(user.profile.photo)} alt={user.userName} />
                </Display>
                <Space horizontal={40} />
                <Info>
                    <UserName>{user.userName}</UserName>
                    <Space vertical={10} />
                    <Email>{user.email}</Email>
                    <Space vertical={10} />
                    {user.profile.age && <InfoContainer>
                        <Label>Age :</Label>
                        <Space horizontal={5} />
                        <Text>{user.profile.age}</Text>
                    </InfoContainer>}
                    {user.profile.gender && <InfoContainer>
                        <Label>Gender :</Label>
                        <Space horizontal={5} />
                        <Text>{user.profile.gender}</Text>
                    </InfoContainer>}
                    <Space vertical={10} />
                    <Label>Interests</Label>
                    <Space vertical={10} />
                    <HashTags tags={user.profile.interests.map((item, index) => ({id: index, value: item}))} />
                    <Description>{user.description}</Description>
                </Info>
            </UpperSection>
            <Space vertical={40} />
            {friends && friends.length > 0 && <MiddleSection>
                <Legend>Friends</Legend>
                <Space vertical={20} />
                <FriendList>
                    {friends.map(friend => (
                        <ProfileCard key={friend.id} item={friend} onClick={() => goToProfile(friend.id)} />
                    ))}
                </FriendList>
            </MiddleSection>}
            <Space vertical={40} />
            {channels && channels.length > 0 && <LowerSection>
                <Legend>Channels</Legend>
                <Space vertical={20} />
                <ChannelList>
                    {
                        channels.map(channel => (
                            <ChannelCard key={channel.id} item={channel} onClick={() => goToChannel(channel.id)} />
                        ))  
                    }
                </ChannelList>
            </LowerSection>}
        </Container>
    );
}

export default Profile;