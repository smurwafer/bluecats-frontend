import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Inpt = styled.input`
    border: 0.5px solid #ccc;
    border-radius: 5px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    padding: 15px;
    width: ${({ block }) => block ? `100%` : 'min-content'};

    ::placeholder {
        color: ${() => `${colorMap['secondary'].normal}`};
    }

    &:focus {
        border: ${() => `0.5px solid ${colorMap['dark'].normal}`};
        outline: none;
    }
`;