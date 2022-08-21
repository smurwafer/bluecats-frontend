import PropTypes from 'prop-types';
import Image from "../image";
import AccountType from '../utility/category/account-type';
import { Circle, Container, Dot, Square, Text } from "./styles";

const Account = ({ type = AccountType.Circle, online = false, size = 30, url, title, self, onClick, ...props }) => { 
    if (type === AccountType.Circle) {
        return (
            <Container onClick={onClick}>
                <Circle size={size}>
                    <Image
                        src={url}
                        alt={title}
                    />
                </Circle>
                {title && <Text>{title}</Text>}
                {online && <Dot self={self} />}
            </Container>
        );
    }

    return (
        <Container onClick={onClick}>
            <Square size={size}>
                <Image
                    src={url}
                    alt={title}
                />
            </Square>
            {title && <Text>{title}</Text>}
            {online && <Dot self={self} />}
        </Container>
    );
}   

Account.propTypes = {
    type: PropTypes.oneOf([AccountType.Circle, AccountType.Square]),
    size: PropTypes.number,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    online: PropTypes.bool,
};

export default Account;