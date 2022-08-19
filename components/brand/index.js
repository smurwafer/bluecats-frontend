import PropTypes from 'prop-types';
import config from "../../utility/config";
import { Container, Text } from "./styles";

const Brand = ({ fontSize = 30 }) => {
    return (
        <Text fontSize={fontSize}>
            {config.appName}
        </Text>
    );
}

Brand.propTypes = {
    fontSize: PropTypes.number,
};

export default Brand;