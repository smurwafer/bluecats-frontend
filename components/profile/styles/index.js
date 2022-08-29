import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

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
    border: 0.5px solid #ccc;
    position: relative;
    overflow: hidden;
`;

export const Info = styled.div`
    height: 100%;
    /* width: 50%; */
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const UserName = styled.p`
    font-size: 48px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Email = styled.p`
    font-size: 18px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const Description = styled.p`
    font-size: 15px;
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