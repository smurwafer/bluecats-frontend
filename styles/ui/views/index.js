import PropTypes from 'prop-types';
import { Container, Text } from "./styles";
import { AiFillEye } from 'react-icons/ai';
import Space from "../space";
import PositionType from "../utility/category/position-type";
import PositionMap from "../utility/position-config";

const Views = ({ views, position = PositionType.BottomRight }) => {
    return (
        <Container {...PositionMap[position]}>
            <AiFillEye size={20} color={'#fff'} />
            <Space horizontal={6} />
            <Text>{views}</Text>
        </Container>
    );
}

Views.propTypes = {
    views: PropTypes.string,
    position: PropTypes.oneOf([PositionType.TopLeft, PositionType.TopRight, PositionType.BottomLeft, PositionType.BottomRight]),
};

export default Views;