import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    cursor: pointer;
    height: 210px;
    width: 160px;
    border-radius: 5px;
    border: 0.5px solid #ccc;
    padding: 15px 20px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    text-align: center;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 150px;
    }

    @media (max-width: 800px) {
        width: 145px;
    }

    @media (max-width: 600px) {
        width: 138px;
    }
`;

export const Subscriber = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Text = styled.p`
    font-size: 16px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;