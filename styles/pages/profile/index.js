import styled from 'styled-components/macro';
import colorMap from '../../ui/utility/color-config';

export const Container = styled.div`
    padding: 20px;
`;

export const UpperSection = styled.div`
    height: 300px;
    display: flex;
    flex-direction: row;
`;

export const Display = styled.div`
    height: 100%;
    width: 220px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
`;

export const Info = styled.div`
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.p`
    font-size: 68px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Email = styled.p`
    font-size: 18px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const Description = styled.p`
    font-size: 18px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const MiddleSection = styled.div`
    width: 100%;
`;

export const Legend = styled.p`
    font-size: 18px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const FriendList = styled.div`
    width: 100%;
    /* height: 150px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #ccc;
    padding: 20px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    overflow: auto;
`;

export const LowerSection = styled.div``;

export const ChannelList = styled.div`
    width: 100%;
    /* height: 150px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0px;
    overflow: auto;
`;

export const ButtonSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;