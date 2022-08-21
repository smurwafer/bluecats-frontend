import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    cursor: pointer;
    width: 130px;
    height: 130px;
    border-radius: 5px;
    border: 0.5px solid #ccc;
    text-align: center;
    padding: 35px 16px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.div`
    margin: auto;
`;

export const Text = styled.p`
    margin: 0;
    color: ${() => `${colorMap['primary'].normal}`};
    font-size: 17px;
`;