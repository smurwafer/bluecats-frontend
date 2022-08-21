import colorMap from "../../styles/ui/utility/color-config";
import ActionType from "../../utility/category/action-type";
import { Container, Icon, Text } from "./styles";
import { MdPresentToAll } from 'react-icons/md';
import { BsFillCameraFill, BsRecordCircle } from "react-icons/bs";
import Space from "../../styles/ui/space";

const ActionCard = ({ actionType, text }) => {
    const iconSize = 30;
    const iconColor = colorMap['secondary'].normal;

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
        default:
            icon = null;
    }

    return (
        <Container>
            {icon && <Icon>
                {icon}
            </Icon>}
            {icon && <Space flexed />}
            <Text>
                {text}
            </Text>
        </Container>
    );
}

export default ActionCard;