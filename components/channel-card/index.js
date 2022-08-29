import Account from "../../styles/ui/account";
import AccountType from "../../styles/ui/utility/category/account-type";
import { Container, Subscriber, Text } from "./styles";
import { IoMdAdd } from 'react-icons/io';
import colorMap from "../../styles/ui/utility/color-config";
import { galleryUrl } from "../../utility/media-url";

const ChannelCard = ({ item, create, onClick }) => {
    if (create) {
        return (
            <Container onClick={onClick}>
                <IoMdAdd size={80} color={colorMap['primary'].normal} />
                <Text>Create New Channel</Text>
            </Container>
        );
    }

    return (
        <Container onClick={onClick}>
            <Account title={item.name} url={galleryUrl(item.photo)} type={AccountType.Circle} size={100} />
            <Subscriber>{item.subscribers ? item.subscribers.length : 0}</Subscriber>
        </Container>
    );
}

export default ChannelCard;