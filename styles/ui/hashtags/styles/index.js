import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    overflow: auto;
`;

export const HashTagItem = styled.div`
    margin-right: 10px;
`;

export const HashTagText = styled.p`
    text-transform: capitalize;
    margin: 0;
    color: ${() => `${colorMap['primary'].normal}`};
    font-size: 17px;
`;