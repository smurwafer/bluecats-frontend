import Image from "../../styles/ui/image";
import { Action, Container, Creator, Display, Info, Live, Profile, Text, Title, UserName, Views } from "./styles";
import { AiFillEye } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";

const Stream = ({
    stream: {
        title,
        gallery: [{ image, caption }],
        url,
        live,
        views,
        creator: { 
            userName,
            profile,
        }
    }
}) => {
    return (
        <Container>
            <Display>
                <Image
                    src={image}
                    alt={caption}
                />
                {live && <Live>
                    <Text>Live</Text>
                </Live>}
                <Views>
                    <AiFillEye size={20} color={'#fff'} />
                    <Space horizontal={6} />
                    <Text>{views}</Text>
                </Views>
            </Display>
            <Space vertical={10} />
            <Creator>
                <Profile>
                    <Account
                        url={profile.image}
                        alt={profile.userName}
                        size={30}
                        type={'square'}
                    />
                </Profile>
                <Space horizontal={10} />
                <Info>
                    <Title>{title}</Title>
                    <UserName>{userName}</UserName>
                </Info>
                <Space flexed />
                <Action>
                    <FiMoreHorizontal size={20} />
                </Action>
                <Space horizontal={10} />
            </Creator>
        </Container>
    );
}

export default Stream;