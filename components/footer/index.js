import { Action, Actions, Container, Text } from "./styles";
import { AiFillGoogleCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Space from "../../styles/ui/space";
import colorMap from "../../styles/ui/utility/color-config";

const Footer = () => {
    const iconColor = colorMap['secondary'].normal;
    const iconSize = 20;

    return (
        <Container>
            <Text>
                Connect with us on other platform as well
            </Text>
            <Space horizontal={20} />
            <Actions>
                <Action>
                    <AiFillGoogleCircle size={iconSize} color={iconColor} />
                </Action>
                <Action>
                    <AiFillFacebook size={iconSize} color={iconColor} />
                </Action>
                <Action>
                    <AiFillInstagram size={iconSize} color={iconColor} />
                </Action>
                <Action>
                    <AiFillTwitterCircle size={iconSize} color={iconColor} />
                </Action>
                <Action>
                    <AiFillLinkedin size={iconSize} color={iconColor} />
                </Action>
                <Action>
                    <AiFillYoutube size={iconSize} color={iconColor} />
                </Action>
            </Actions>
        </Container>
    );
}

export default Footer;