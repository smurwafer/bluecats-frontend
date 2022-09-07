import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div``;

export const Legend = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 20px;

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }

    @media (max-width: 405px) {
        font-size: 16px;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`;

export const ListItem = styled.div`
    margin: 10px;
`;