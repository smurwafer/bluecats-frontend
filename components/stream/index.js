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
import { galleryUrl } from "../../utility/media-url";

const Stream = ({
    stream: {
        id,
        title,
        description,
        thumbnail,
        gallery,
        live,
        channel,
    }
}) => {
    const router = useRouter();

    const goToStreamView = () => {
        router.push('/stream/' + id);
    }

    return (
        <Container>
            <Display onClick={goToStreamView}>
                <Image
                    src={galleryUrl(thumbnail)}
                    alt={thumbnail.caption}
                />
                {live && <Tag text={'Live'} color={'danger'} />}
                <Views views={'1.2k'} /> 
            </Display>
            <Space vertical={10} />
            <Creator>
                <Profile>
                    <Account
                        url={galleryUrl(channel.photo)}
                        alt={channel.name}
                        size={30}
                        type={AccountType.Square}
                    />
                </Profile>
                <Space horizontal={10} />
                <Info>
                    <Title>{title}</Title>
                    <UserName>{channel.name}</UserName>
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