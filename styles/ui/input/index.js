import PropTypes from 'prop-types';
import { Container, Inpt, Label, TextArea } from "./styles";

const Input = ({ text, setText, block = true, expand = false, label = '', type = 'text', placeholder }) => { 
    if (expand) {
        return (
            <Container expand={expand}>
                {label.trim().length > 0 && <Label>{label}</Label>}
                <TextArea
                    type={type}
                    block={block}
                    expand={expand}
                    placeholder={placeholder}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </Container>
        );
    }

    return (
        <Container>
            {label.trim().length > 0 && <Label>{label}</Label>}
            <Inpt
                type={type}
                block={block}
                placeholder={placeholder}
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </Container>
    );
}

Input.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    block: PropTypes.bool,
    expand: PropTypes.bool,
};

export default Input;