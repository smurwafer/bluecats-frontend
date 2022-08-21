import styled from 'styled-components/macro';
import colorMap from '../../ui/utility/color-config';

export const Container = styled.div`
    padding: 20px;
`;

export const UpperSection = styled.div`
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Display = styled.div`
    width: 300px;
    height: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border: 0.5px solid #ccc;
`;

export const ThemeInputContainer = styled.div`
    width: 30%;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.p`
    font-size: 16px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
`;

export const InputContainer = styled.div`
    flex: 1;
`;

export const MiddleSection = styled.div``;

export const PinboardContainer = styled.div`
    width: 30%;
`;

export const ThemeDisplay = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
    border: 0.5px solid #ccc;
`;

export const LowerSection = styled.div`

`;

export const SearchContainer = styled.div`
    width: 30%;
`;

export const HolderList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
    border: 0.5px solid #ccc;
`;

export const HolderItem = styled.div`
    margin: 10px;
`;

export const ButtonContainer = styled.div`
    width: 30%;
`;