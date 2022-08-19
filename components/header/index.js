import PropTypes from 'prop-types';
import Account from "../../styles/ui/account";
import { Background, Container, Creator, Description, Detail, Info, Name, Play, Profile, Ratings, Title } from "./styles";
import { AiFillStar } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import Space from '../../styles/ui/space';

const Header = ({ title, name, description, creatorUrl, backgroundUrl, rating }) => {
    const iconSize = 23;
    const iconColor = '#fff';

    return (
        <Container>
            <Background url={backgroundUrl}>
                <Detail>
                    <Title>{title}</Title>
                    <Space vertical={20} />
                    <Description>
                        {description}
                    </Description>
                    <Space vertical={30} />
                    <Creator>
                        <Profile>
                            <Account
                                url={creatorUrl}
                                size={70}
                                type={'square'}
                            />
                        </Profile>
                        <Space horizontal={20} />
                        <Info>
                            <Name>{name}</Name>
                            <Space vertical={10} />
                            <Ratings>
                                <AiFillStar size={iconSize} color={iconColor} />
                                <AiFillStar size={iconSize} color={iconColor} />
                                <AiFillStar size={iconSize} color={iconColor} />
                                <AiFillStar size={iconSize} color={iconColor} />
                                <AiFillStar size={iconSize} color={iconColor} />
                            </Ratings>
                        </Info>
                    </Creator>
                </Detail>
                <Play>
                    <BsPlayCircle size={100} color={'#fff'} />
                </Play>
            </Background>
        </Container>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    creatorUrl: PropTypes.string,
    backgroundUrl: PropTypes.string,
    rating: PropTypes.number,
};

export default Header;