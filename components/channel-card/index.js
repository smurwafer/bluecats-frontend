import Account from "../../styles/ui/account";
import AccountType from "../../styles/ui/utility/category/account-type";
import { Container, Subscriber, Text } from "./styles";
import { IoMdAdd } from 'react-icons/io';
import colorMap from "../../styles/ui/utility/color-config";

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
            <Account title={item.name} url={item.image} type={AccountType.Circle} size={100} />
            <Subscriber>{item.subscribers}</Subscriber>
        </Container>
    );
}

export default ChannelCard;