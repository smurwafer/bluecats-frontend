import styled from 'styled-components/macro';
import colorMap from '../../ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;

    @media (max-width: 650px) {
        display: contents;
    }
`;

export const DisplaySection = styled.div`
    width: 35%;

    @media (max-width: 1000px) {
        width: 250px;
    }

    @media (max-width: 650px) {
        width: 100%;
        padding: 40px 0px;
    }

    @media (max-width: 405px) {
        padding: 20px 0px;
    }
`;

export const DisplayContainer = styled.div`
    width: 250px;
    text-align: center;
    margin: auto;
`;

export const Display = styled.div`
    position: relative;
    border-radius: 5px;
    height: 300px;
    width: 100%;
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light2}`};
`;

export const Text = styled.p``;

export const FormSection = styled.div`
    width: 65%;

    @media (max-width: 1000px) {
        flex: 1;
    }
    
    @media (max-width: 650px) {
        width: 100%;
        padding: 40px;
    }

    @media (max-width: 405px) {
        padding: 20px;
    }
`;

export const Form = styled.form`
    width: 100%;
`;

export const Info = styled.div`
    width: 70%;

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
`;

export const TextContainer = styled.div`
    height: 200px;
    width: 100%;
`;