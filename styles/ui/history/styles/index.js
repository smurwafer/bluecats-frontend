import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
`;

export const IconSection = styled.div``;

export const TextSection = styled.div`
    flex: 1;
`;

export const Text = styled.p`
    margin: 0;
    font-size: ${({ fontSize }) => fontSize + 'px'};
    color: ${() => `${colorMap['secondary'].normal}`};
`;