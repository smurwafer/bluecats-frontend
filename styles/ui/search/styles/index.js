import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
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