import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 1000px) {
        display: contents;
    }
`;

export const StreamSection = styled.div`
    flex: 1;
    padding: 20px;
`;

export const CommentSection = styled.div`
    height: 560px;
    width: 400px;
    padding: 20px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 460px;
    }
`;

export const Display = styled.div`
    position: relative;
    width: 100%;
    /* height: 520px; */
    overflow: hidden;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
`;

export const StreamDisplay = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: ${({ backgroundUrl }) => `url(${backgroundUrl}) center no-repeat`};
    background-size: cover;
    padding-bottom: 50%;
    
    @media (max-width: 800px) {
        padding-bottom: 55%;
    }
    
    @media (max-width: 600px) {
        padding-bottom: 60%;
    }
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

