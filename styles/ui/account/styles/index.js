import styled from 'styled-components/macro';

export const Container = styled.div`
    text-align: center;
`;

export const Circle = styled.div`
    position: relative;
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 100%;
    overflow: hidden;
    border: ${({ bordered }) => bordered ? `0.5px solid #ccc` : 'none'};
`;

export const Square = styled.div`
    position: relative;
    height: ${({ size }) => size + 'px'};
    width: ${({ size }) => size + 'px'};
    border-radius: 5px;
    overflow: hidden;
    border: ${({ bordered }) => bordered ? `0.5px solid #ccc` : 'none'};
`;

export const Text = styled.p`
    font-size: ${({ fontSize }) => fontSize + 'px'};
`;

export const Dot = styled.div`
    position: absolute;
    top: 10%;
    right: 0;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    color: ${({ self }) => self ? `${colorMap['primary'].normal}` : `${colorMap['success'].normal}`};
`;