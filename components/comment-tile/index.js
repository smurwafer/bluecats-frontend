import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import AccountType from "../../styles/ui/utility/category/account-type";
import { ActionSection, Container, InfoSection, ProfileSection, ReplyButton, Text, Timestamp, UserName, Wrapper } from "./styles";

const CommentTile = ({ comment: { id, text, commentor, timestamp, onReply } }) => {

    const clickReplyHandler = () => {
        onReply(id);
    }

    return (
        <Container>
            <Wrapper>
                <ProfileSection>
                    <Account url={commentor.image} size={40} type={AccountType.Square} />
                </ProfileSection>
                <Space horizontal={10} />
                <InfoSection>
                    <UserName>{commentor.userName}</UserName>
                    <Space vertical={5} />
                    <Text>{text}</Text>
                </InfoSection>
                <ActionSection>
                    <Timestamp>{timestamp}</Timestamp>
                    <Space vertical={10} />
                    <ReplyButton onClick={clickReplyHandler}>Reply</ReplyButton>
                </ActionSection>
            </Wrapper>
        </Container>
    );
}

export default CommentTile;