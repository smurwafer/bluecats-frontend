import PropTypes from 'prop-types';
import { Inpt } from "./styles";

const Input = ({ text, setText, block = true, type = 'text', placeholder }) => { 
    return <Inpt
        type={type}
        block={block}
        placeholder={placeholder}
        value={text}
        onChange={e => setText(e.target.value)}
    />;
}

Input.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    block: PropTypes.bool,
};

export default Input;