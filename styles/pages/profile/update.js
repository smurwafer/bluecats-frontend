import styled from 'styled-components/macro';
import colorMap from '../../ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;
`;

export const DisplaySection = styled.div`
    width: 35%;
`;

export const DisplayContainer = styled.div`
    width: 250px;
    text-align: center;
    margin: auto;
`;

export const Display = styled.div`
    border-radius: 5px;
    height: 300px;
    width: 100%;
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light2}`};
`;

export const Text = styled.p``;

export const FormSection = styled.div`
    width: 65%;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Info = styled.div`
    width: 70%;
`;

export const TextContainer = styled.div`
    height: 200px;
    width: 100%;
`;