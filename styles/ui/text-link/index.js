import PropTypes from 'prop-types';
import { Text, TxtLink } from "./styles";

const TextLink = ({ children, href, fontSize = 16 }) => {
    return (
        <TxtLink href={href}>
            <Text fontSize={fontSize}>{children}</Text>
        </TxtLink>
    );
}

TextLink.propTypes = {
    href: PropTypes.string,
    fontSize: PropTypes.number,
};

export default TextLink;