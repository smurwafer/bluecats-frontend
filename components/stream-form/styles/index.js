import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 800px) {
        display: block;
    }
`;

export const DisplaySection = styled.div`
    /* flex: 1; */
    width: 60%;
    padding: 20px;
    justify-content: flex-start;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const InfoSection = styled.div`
    /* flex: 1; */
    width: 40%;
    padding: 20px;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const PinboardContainer = styled.div``;

export const Display = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: row;
`;

export const ScreenShareDisplay = styled.div`
    position: relative;
    flex: 2;
    height: 100%;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
`;

export const CameraDisplay = styled.div`
    position: relative;
    flex: 1;
    height: 100%;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    border-radius: 5px;
    overflow: hidden;
`;

export const Action = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Gallery = styled.div`
    height: 150px;
    width: 100%;
`;

export const Info = styled.div`
    height: 360px;
    display: flex;
    flex-direction: column;
`;

export const TextAreaContainer = styled.div`
    flex: 1;
`;