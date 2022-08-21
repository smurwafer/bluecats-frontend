import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    background-color: ${colorMap['secondary'].light2};
    border-radius: 5px;
`;

export const Tab = styled.div`
    position: relative;
    cursor: pointer;
    flex: 1;
    text-align: center;
    height: 100%;
    align-items: center;
    border-bottom: ${({ active }) => active ? `3px solid ${colorMap['primary'].normal}` : 'none'};
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Text = styled.p`
    margin: 0;
    font-size: 16px;
    color: ${({ active }) => active ? `${colorMap['primary'].normal}` : `${colorMap['dark'].normal}`};
`;