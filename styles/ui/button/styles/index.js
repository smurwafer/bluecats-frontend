import styled from 'styled-components/macro';

export const Btn = styled.button`
    padding: ${({ padding }) => `${padding}px`};
    width: ${({ block }) => block ? '100%' : 'min-content'};
    background-color: ${({ color }) => color};
    font-size: ${({ fontSize }) => `${fontSize}px`};
    border-radius: ${({ borderRadius }) => `${borderRadius}px`};
    color: #ffffff;
    border: none;

    :hover {
        cursor: pointer;
    }
`;

export const UploadInput = styled.input`
    display: none;
`;