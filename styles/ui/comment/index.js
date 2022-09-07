import PropTypes from 'prop-types';
import { Container, IconButton, IconSection, InputSection, CommentInput, IconText, CommentForm } from "./styles";

const Comment = ({ text, setText, placeholder = 'Comment', disabled = false, onSend }) => {
    const iconSize = 20;
    const iconColor = '#fff';

    const sendHandler = async (e) => {
        e.preventDefault();
        await onSend();
    }

    return (
        <Container>
            <CommentForm onSubmit={sendHandler}>
                <InputSection>
                    <CommentInput
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder={placeholder}
                    />
                </InputSection>
                <IconSection>
                    <IconButton disabled={disabled} size="small" borderRadius={5} type={'submit'}>
                        <IconText>Send</IconText>
                    </IconButton>
                </IconSection>
            </CommentForm>
        </Container>
    );
}

Comment.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onSend: PropTypes.func,
};

export default Comment;