import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Legend = styled.h3`
    font-size: 23px;
    text-transform: capitalize;
`;

export const Board = styled.div`
    flex: 1;
    border-radius: 5px;
    border: ${({ bordered }) => bordered ? `0.5px solid ${colorMap['secondary'].normal}` : 'none'};
    background-color: ${() => `${colorMap['secondary'].light2}`};
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;

export const Pin = styled.div`
    cursor: pointer;
    border-radius: 30px;
    width: min-content;
    margin: 5px;
    border: ${({ selected, color }) => selected ? `0.5px solid ${colorMap[color].normal}` : `0.5px solid ${colorMap['secondary'].normal}`};
    /* padding: ${({ padding }) => padding + 'px'}; */
    padding: 7px 15px;
    font-size: ${({ fontSize }) => fontSize + 'px'};
    color: ${({ selected, color }) => selected ? `${colorMap[color].normal}` : `${colorMap['secondary'].normal}`};
    font-weight: 300;
    background-color: #fff;
`;

export const Text = styled.p`
    font-size: ${({ fontSize }) => fontSize + 'px'};
    color: ${({ selected, color }) => selected ? `${colorMap[color].normal}` : `${colorMap['secondary'].normal}`};
    font-weight: 300;
`;