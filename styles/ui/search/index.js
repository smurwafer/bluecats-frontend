import Button from "../button";
import Input from "../input";
import PropTypes from 'prop-types';
import { Container, IconButton, IconSection, InputSection, SearchInput } from "./styles";
import { BsSearch } from 'react-icons/bs';

const Search = ({ text, setText, placeholder = 'Search', onSearch }) => {
    const iconSize = 20;
    const iconColor = '#fff';

    return (
        <Container>
            <InputSection>
                <SearchInput
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder={placeholder}
                />
            </InputSection>
            <IconSection>
                <IconButton size="small" borderRadius={5} onClick={onSearch}>
                    <BsSearch size={iconSize} color={iconColor} />
                </IconButton>
            </IconSection>
        </Container>
    );
}

Search.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
};

export default Search;