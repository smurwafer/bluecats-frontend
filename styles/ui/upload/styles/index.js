import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    text-align: center;
`;

export const DisplaySection = styled.div`
    width: 150px;
    margin: auto;
`;

export const Display = styled.div`
    position: relative;
    height: 150px;
    width: 100%;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    border: ${() => `0.5px solid #ccc`};
    margin: auto;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Action = styled.div``;

export const Text = styled.p``;