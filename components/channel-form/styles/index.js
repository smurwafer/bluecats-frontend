import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    padding: 20px;

    @media (max-width: 600px) {
        padding: 15px;
    }

    @media (max-width: 405px) {
        padding: 10px;
    }
`;

export const UpperSection = styled.div`
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) {
        display: contents;
    }
`;

export const Display = styled.div`
    width: 300px;
    height: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    /* border: 0.5px solid #ccc; */

    @media (max-width: 600px) {
        width: 300px;
        height: 400px;
        margin: auto;
    }
`;

export const ThemeInputContainer = styled.div`
    width: 350px;

    @media (max-width: 600px) {
        width: 100%;
    }
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

    @media (max-width: 600px) {
        font-size: 14px;
    }
    @media (max-width: 405px) {
        font-size: 12px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
    }
`;

export const InputContainer = styled.div`
    flex: 1;

    @media (max-width: 600px) {
        height: 200px;
    }
`;

export const MiddleSection = styled.div``;

export const PinboardContainer = styled.div`
    width: 350px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ThemeDisplay = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
    border: 0.5px solid #ccc;
    @media (max-width: 1000px) {
        height: 250px;
    }
    @media (max-width: 800px) {
        height: 200px;
    }
    @media (max-width: 600px) {
        height: 175px;
    }
    @media (max-width: 405px) {
        height: 165px;
    }
`;

export const LowerSection = styled.div`

`;

export const SearchContainer = styled.div`
    width: 350px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const HolderList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
    border: 0.5px solid #ccc;
    min-height: 140px;
`;

export const HolderItem = styled.div`
    margin: 10px;
`;

export const ButtonContainer = styled.div`
    width: 350px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;