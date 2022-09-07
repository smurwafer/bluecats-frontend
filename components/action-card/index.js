import colorMap from "../../styles/ui/utility/color-config";
import ActionType from "../../utility/category/action-type";
import { Container, Icon, Text } from "./styles";
import { MdPresentToAll } from 'react-icons/md';
import { BsFillCameraFill, BsRecordCircle } from "react-icons/bs";
import { BiMicrophone } from 'react-icons/bi'
import Space from "../../styles/ui/space";

const ActionCard = ({ actionType, text, selected, onClick }) => {
    const iconSize = 30;
    const iconColor = selected ? colorMap['primary'].normal : colorMap['secondary'].normal;

    let icon = <MdPresentToAll />;

    switch (actionType) {
        case ActionType.ShareScreen:
            icon = <MdPresentToAll color={iconColor} size={iconSize} />;
            break;
        case ActionType.Record:
            icon = <BsRecordCircle color={iconColor} size={iconSize} />;
            break;
        case ActionType.Camera:
            icon = <BsFillCameraFill color={iconColor} size={iconSize} />;
            break;
        case ActionType.Microphone:
            icon = <BiMicrophone color={iconColor} size={iconSize} />;
            break;
        default:
            icon = null;
    }

    return (
        <Container selected={selected} onClick={onClick}>
            {icon && <Icon>
                {icon}
            </Icon>}
            {icon && <Space flexed />}
            <Text selected={selected}>
                {text}
            </Text>
        </Container>
    );
}

export default ActionCard;