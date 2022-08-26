import PropTypes from 'prop-types';
import config from "../../utility/config";
import { Container, Text } from "./styles";

const Brand = ({ fontSize = 30 }) => {
    return (
        <Container>
            <Text fontSize={fontSize}>
                {config.appName}
            </Text>
        </Container>
    );
}

Brand.propTypes = {
    fontSize: PropTypes.number,
};

export default Brand;