import { useRouter } from "next/router";
import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import Tag from "../../styles/ui/tag";
import AccountType from "../../styles/ui/utility/category/account-type";
import PositionType from "../../styles/ui/utility/category/position-type";
import Views from "../../styles/ui/views";
import { Container, Creator, Info, Profile, Title, UserName } from "./styles";

const StreamCard = ({ item }) => {
    const router = useRouter();

    const goToStreamView = () => {
        router.push('/stream/view');
    }

    return (
        <Container url={item.image} onClick={goToStreamView}>
            <Creator>
                <Profile>
                    <Account
                        url={item.creator.image}
                        size={40}
                        type={AccountType.Square}
                    />
                </Profile>
                <Space horizontal={10} />
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                    <UserName>
                        {item.creator.userName}
                    </UserName>
                </Info>
            </Creator>
            {item.live && <Tag text={'Live'} color={'danger'} position={PositionType.BottomLeft} />}
            <Views views={item.views} position={PositionType.BottomRight} />
        </Container>
    );
}

export default StreamCard;