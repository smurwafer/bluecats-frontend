import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    width: 100%;
`;

export const Display = styled.div`
    position: relative;
    width: 100%;
    height: 520px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
`;

export const ActionList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const ActionItem = styled.div`
    cursor: pointer;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ActionText = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Profile = styled.div``;

export const TextContainer = styled.div``;

export const Title = styled.p`
    font-size: 17px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const Name = styled.p`
    font-size: 14px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

