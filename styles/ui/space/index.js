import { Flexed, Horizontal, Vertical } from "./styles";
import PropTypes from 'prop-types';

const Space = ({ vertical, horizontal, flexed }) => {
    if (flexed)
        return <Flexed />;

    if (vertical)
        return <Vertical vertical={vertical} />;

    return <Horizontal horizontal={horizontal} />;
}

Space.propTypes = {
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
    flexed: PropTypes.bool,
};

export default Space;