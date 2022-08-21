import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    width: 100%;
    height: ${({ expand }) => expand ? '100%' : 'min-content' };
`;

export const Label = styled.p`
    font-size: 17px;
    color: ${() => `${colorMap['secondary'].normal}`};
    font-weight: 500;
    margin: 0;
    margin-bottom: 10px;
`;

export const Inpt = styled.input`
    border: 0.5px solid #ccc;
    border-radius: 5px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    padding: 15px;
    width: ${({ block }) => block ? `100%` : 'min-content'};
    text-align: start;
    align-items: flex-start;

    ::placeholder {
        color: ${() => `${colorMap['secondary'].normal}`};
    }

    &:focus {
        border: ${() => `0.5px solid ${colorMap['dark'].normal}`};
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    border: 0.5px solid #ccc;
    border-radius: 5px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    padding: 15px;
    width: ${({ block }) => block ? `100%` : 'min-content'};
    height: ${({ expand }) => expand ? '100%' : 'min-content' };
    text-align: start;
    align-items: flex-start;

    ::placeholder {
        color: ${() => `${colorMap['secondary'].normal}`};
    }

    &:focus {
        border: ${() => `0.5px solid ${colorMap['dark'].normal}`};
        outline: none;
    }
`;