import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div` 
    cursor: pointer;
    position: relative;
    text-align: center;
`;

export const Circle = styled.div`
    position: relative;
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 100%;
    overflow: hidden;
    border: ${({ bordered }) => bordered ? `0.5px solid #ccc` : 'none'};
    margin: auto;
    background-color: ${() => `${colorMap['secondary'].light2}`};
`;

export const Square = styled.div`
    position: relative;
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 5px;
    overflow: hidden;
    border: ${({ bordered }) => bordered ? `0.5px solid #ccc` : 'none'};
    margin: auto;
    background-color: ${() => `${colorMap['secondary'].light2}`};
`;

export const Text = styled.p`
    font-size: ${({ fontSize }) => fontSize + 'px'};
`;

export const Dot = styled.div`
    position: absolute;
    top: 7%;
    right: -3%;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: ${({ self }) => self ? `${colorMap['primary'].normal}` : `${colorMap['success'].dark1}`};
`;