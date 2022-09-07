import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    height: 76vh;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    overflow: hidden;
    padding: 20px;

    @media (max-width: 800px) {
        height: min-content;
        padding: 0px;
        background: none;
        border: none;
    }
`;

export const HistorySection = styled.div`
    height: 100%;
    overflow: scroll;

    @media (max-width: 800px) {
        display: none;
    }
`;