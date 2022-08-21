import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    z-index: 20;
    position: absolute;
    top: ${({ top }) => top ? '10px' : 'auto'};
    left: ${({ left }) => left ? '10px' : 'auto'};
    right: ${({ right }) => right ? '10px' : 'auto'};
    bottom: ${({ bottom }) => bottom ? '10px' : 'auto'};
    background-color: ${({ color }) => `${colorMap[color].normal}`};
    border-radius: 5px;
    text-align: center;
    padding: 5px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #fff;
    margin: 0;
`;