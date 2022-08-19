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
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.div`
    cursor: pointer;
    margin: 10px;

    :hover {
        color: ${() => `${colorMap['primary'].normal}`};
    }
`;