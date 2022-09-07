import styled from 'styled-components/macro';
import colorMap from '../../ui/utility/color-config';

export const Container = styled.div`
    padding: 20px;
`;

export const ButtonSection = styled.div`
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    @media (max-width: 600px) {
        width: 100%;
        padding: 10px;
    }

    @media (max-width: 405px) {
        width: 100%;
        display: contents;
    }
`;