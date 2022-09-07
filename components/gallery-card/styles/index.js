import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    height: 100%;
    justify-content: center;
    text-align: center;
    margin-right: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Display = styled.div`
    cursor: pointer;
    position: relative;
    flex: 1;
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light1}`};
`;

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const DotContainer = styled.div`
    height: 20px;
    position: relative;
`;

export const Dot = styled.div`
    cursor: pointer;
    border-radius: 100%;
    height: 7px;
    width: 7px;
    border: none;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${() => `${colorMap['primary'].normal}`};
`;
