import Button from "../button";
import Input from "../input";
import PropTypes from 'prop-types';
import { Container, Wrapper, IconButton, IconSection, InputSection, SearchInput, SuggestionContainer, SuggestionList, SuggestionItem, SuggestionDisplay, SuggestionText } from "./styles";
import { BsSearch } from 'react-icons/bs';
import Image from "../image";
import { galleryUrl } from "../../../utility/media-url";
import Space from "../space";

const Search = ({ text, setText, placeholder = 'Search', onSearch, suggestions = [], onSuggestionClick }) => {
    const iconSize = 20;
    const iconColor = '#fff';

    return (
        <Container>
            <Wrapper>
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
            </Wrapper>
            {suggestions.length > 0 && <SuggestionContainer>
                <SuggestionList>
                    {suggestions.map(({ item }) => (
                        <SuggestionItem key={item.id} onClick={() => onSuggestionClick(item)}>
                            <SuggestionDisplay>
                                <Image src={galleryUrl(item.profile.photo)} alt={item.profile.photo.caption} />
                            </SuggestionDisplay>
                            <Space horizontal={10} />
                            <SuggestionText>
                                {item.userName}
                            </SuggestionText>
                        </SuggestionItem>
                    ))}
                </SuggestionList>
            </SuggestionContainer>}
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