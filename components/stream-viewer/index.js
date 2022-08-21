import { useRouter } from 'next/router';
import { useState } from "react";
import { BsFillPersonCheckFill, BsFlag, BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import Account from "../../styles/ui/account";
import Image from '../../styles/ui/image';
import Space from '../../styles/ui/space';
import AccountType from "../../styles/ui/utility/category/account-type";
import colorMap from "../../styles/ui/utility/color-config";
import { ActionItem, ActionList, ActionText, Container, Description, Display, Info, Name, Profile, TextContainer, Title } from "./styles";

const StreamViewer = ({ stream: { title, url, creator, description } }) => { 
    const router = useRouter();
    const iconSize = 19;
    const iconColor = colorMap['secondary'].normal;

    const [isLiked, setIsLiked] = useState(false); 
    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);

    const goToChannel = () => {
        router.push('/channel/' + creator.id);
    }

    const clickLikeHandler = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(prevState => prevState - 1);
        } else {
            setIsLiked(true);
            setLikes(prevState => prevState + 1);
        }
    }

    const clickShareHandler = () => { }
    
    const clickFlagHandler = () => { }

    return (
        <Container>
            <Display>
                <Image src={url} alt={title} />
            </Display>
            <ActionList>
                <ActionItem>
                    {isLiked ? <BsHeartFill color={colorMap['danger'].normal} size={iconSize} onClick={clickLikeHandler} /> : <BsHeart color={iconColor} size={iconSize} onClick={clickLikeHandler} />}
                    <Space horizontal={10} />
                    <ActionText>{likes}</ActionText>
                </ActionItem>
                <ActionItem>
                    <BsFillPersonCheckFill color={iconColor} size={iconSize} />
                    <Space horizontal={10} />
                    <ActionText>{views}</ActionText>
                </ActionItem>
                <ActionItem>
                    <BsShareFill color={iconColor} size={iconSize} onClick={clickShareHandler} />
                </ActionItem>
                <Space flexed />
                <ActionItem>
                    <BsFlag color={iconColor} size={iconSize} onClick={clickFlagHandler} />
                </ActionItem>
            </ActionList>
            <Space vertical={20} />
            <Info>
                <Profile>
                    <Account url={creator.image} type={AccountType.Square} size={40} onClick={goToChannel} />
                </Profile> 
                <Space horizontal={10} />
                <TextContainer>
                    <Title>{title}</Title>
                    <Name>{creator.name}</Name>
                </TextContainer>
            </Info>
            <Space vertical={20} />
            <Description>
                {description}
            </Description>
        </Container>
    );
}

export default StreamViewer;