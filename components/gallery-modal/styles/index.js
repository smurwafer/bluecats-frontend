import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 405px) {
        flex-direction: column;
    }
`;

export const Section = styled.div`
    flex: 1;
    height: 100%;

    @media (max-width: 405px) {
        height: auto;
        width: 100%;
    }
`;

export const Display = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    background-color: ${() => `${colorMap['secondary'].light2}`};

    @media (max-width: 405px) {
        height: 200px;
    }
`;

export const Form = styled.form`
    padding: 10px;
    height: 100%;
    width: 100%;
    text-align: center;

    @media (max-width: 405px) {
        padding: 15px;
    }
`;

export const Text = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;