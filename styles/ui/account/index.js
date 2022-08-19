import PropTypes from 'prop-types';
import Image from "../image";
import { Circle, Container, Dot, Square, Text } from "./styles";

const Account = ({ type = 'circle', online = false, size = 30, url, title, ...props }) => { 
    if (type === 'circle') {
        return (
            <Container>
                <Circle size={size}>
                    <Image
                        src={url}
                        alt={title}
                    />
                    {online && <Dot />}
                </Circle>
                {title && <Text>{title}</Text>}
            </Container>
        );
    }

    return (
        <Container>
            <Square size={size}>
                <Image
                    src={url}
                    alt={title}
                />
                {online && <Dot />}
            </Square>
            {title && <Text>{title}</Text>}
        </Container>
    );
}   

Account.propTypes = {
    type: PropTypes.oneOf(['square', 'circle']),
    size: PropTypes.number,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    online: PropTypes.bool,
};

export default Account;