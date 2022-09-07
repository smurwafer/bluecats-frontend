import Link from 'next/link';
import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    @media (max-width: 405px) {
        width: 100%;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const WebNavSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 405px) {
        display: none;
    }
`;

export const MobileNavSection = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 300;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 405px) {
        display: none;
    }
`;

export const Navitem = styled.div`
    padding: 20px;

    @media (max-width: 1000px) {
        padding: 20px 17px;
    }

    @media (max-width: 600px) {
        padding: 20px 10px;
    }

    @media (max-width: 405px) {
        padding: 10px;
        margin-top: 5px;
    }
`;

export const Navlink = styled(Link)``;