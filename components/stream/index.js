import { useRouter } from "next/router";
import Image from "../../styles/ui/image";
import { Action, Container, Creator, Display, Info, Profile, Text, Title, UserName } from "./styles";
import { AiFillEye } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import Views from "../../styles/ui/views";
import Tag from "../../styles/ui/tag";
import Position from "../../styles/ui/utility/category/position-type";
import AccountType from "../../styles/ui/utility/category/account-type";

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
    const router = useRouter();

    const goToStreamView = () => {
        router.push('/stream/view');
    }

    return (
        <Container>
            <Display onClick={goToStreamView}>
                <Image
                    src={image}
                    alt={caption}
                />
                {live && <Tag text={'Live'} color={'danger'} />}
                <Views views={'1.2k'} /> 
            </Display>
            <Space vertical={10} />
            <Creator>
                <Profile>
                    <Account
                        url={profile.image}
                        alt={profile.userName}
                        size={30}
                        type={AccountType.Square}
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