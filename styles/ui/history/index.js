import PropTypes from 'prop-types';
import { Container, IconSection, Text, TextSection } from "./styles";
import { MdHistory } from 'react-icons/md';
import Space from "../space";
import colorMap from '../utility/color-config';

const History = ({ text, onClick }) => {
    const iconSize = 20;
    const iconColor = colorMap['secondary'].normal;

    return (
        <Container onClick={onClick}>
            <IconSection>
                <MdHistory size={iconSize} color={iconColor} />
            </IconSection>
            <Space horizontal={20} />
            <TextSection>
                <Text>
                    {text}
                </Text>
            </TextSection>
        </Container>
    );
}

History.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default History;