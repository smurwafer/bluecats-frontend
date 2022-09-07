import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${() => colorMap['secondary'].light2};
    height: 100%;
    text-align: center;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
    margin-right: 20px;

    @media (max-width: 1000px) {
        font-size: 13px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }

    @media (max-width: 405px) {
        display: none;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.div`
    cursor: pointer;
    margin: 5px 10px 0px;

    :hover {
        color: ${() => `${colorMap['primary'].normal}`};
    }

    @media (max-width: 1000px) {
        margin: 5px 8px 0px;
    }

    @media (max-width: 600px) {
        margin: 5px 6px 0px;
    }
`;