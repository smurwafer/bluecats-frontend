import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    z-index: 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
`;

export const InputSection = styled.div`
    flex: 1;
    height: 100%;
`;

export const SearchInput = styled.input`
    border: 0.5px solid #ccc;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0px 13px;
    font-size: 17px;

    &:focus {
        outline: none;
    }
`;

export const IconSection = styled.div`
    height: 100%;
`;

export const IconButton = styled.button`
    cursor: pointer;
    background-color: ${() => `${colorMap['primary'].normal}`};
    color: #fff;
    height: 100%;
    padding: 0px 10px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const SuggestionContainer = styled.div`
    z-index: 300;
    max-height: 140px;
    border: 0.5px solid #ccc;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    margin-top: 5px;
`;

export const SuggestionList = styled.div`
    height: 100%;
    overflow: scroll;
`;

export const SuggestionItem = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    overflow: hidden;

    &:hover {
        background-color: ${() => `${colorMap['secondary'].light2}`};
    }
`;

export const SuggestionDisplay = styled.div`
    position: relative;
    border-radius: 7px;
    overflow: hidden;
    height: 40px;
    width: 40px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
`;

export const SuggestionText = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;