import PropTypes from 'prop-types';
import PositionType from '../utility/category/position-type';
import PositionMap from '../utility/position-config';
import { Container, Text } from "./styles";

const Tag = ({ text, position = PositionType.TopLeft, color = 'primary' }) => { 
    return (
        <Container {...PositionMap[position]} color={color}>
            <Text>{text}</Text>
        </Container>  
    );
}

Tag.propTypes = {
    text: PropTypes.string,
    position: PropTypes.oneOf([PositionType.TopLeft, PositionType.TopRight, PositionType.BottomLeft, PositionType.BottomRight]),
    color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'dark']),
};

export default Tag;