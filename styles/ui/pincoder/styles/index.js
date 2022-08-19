import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div``;

export const Legend = styled.h3`
    font-size: 23px;
    font-weight: 600;
`;

export const Text = styled.p`
    text-align: left;
`;

export const BlockList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BlockItem = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 5px;
    overflow: hidden;
`;

export const BlockInput = styled.input`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: ${({ active }) => active ? `0.5px solid ${colorMap['primary'].normal}` : `0.5px solid #ccc`};
    background-color: ${() => `${colorMap['secondary'].light2}`};
    text-align: center;

    &:focus {
        /* border: ${() => `0.5px solid ${colorMap['primary'].normal}`}; */
        outline: none;
    }
`;
