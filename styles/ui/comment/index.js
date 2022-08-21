import PropTypes from 'prop-types';
import { Container, IconButton, IconSection, InputSection, CommentInput, IconText } from "./styles";

const Comment = ({ text, setText, placeholder = 'Comment', onSend }) => {
    const iconSize = 20;
    const iconColor = '#fff';

    return (
        <Container>
            <InputSection>
                <CommentInput
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder={placeholder}
                />
            </InputSection>
            <IconSection>
                <IconButton size="small" borderRadius={5} onClick={onSend}>
                    <IconText>Send</IconText>
                </IconButton>
            </IconSection>
        </Container>
    );
}

Comment.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    placeholder: PropTypes.string,
    onSend: PropTypes.func,
};

export default Comment;