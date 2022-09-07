import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    height: 300px;
    position: relative;
    background-image: ${({ url }) => `url(${url})`};
    background-size: 100%;
    border-radius: 5px;
    overflow: hidden;

    /* @media (max-width: 1000px) {
        height: 270px;
        width: 205px;
    }

    @media (max-width: 800px) {
        height: 250px;
        width: 190px;
    }

    @media (max-width: 600px) {
        height: 210px;
        width: 174px;
    }

    @media (max-width: 405px) {
        height: 190px;
        width: 158px;
    } */
`;

export const Creator = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Profile = styled.div``;

export const Info = styled.div``;

export const Title = styled.p`
    font-size: 18px;
    color: #fff;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 16px;
    }

    @media (max-width: 800px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const UserName = styled.p`
    font-size: 14px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 13px;
    }

    @media (max-width: 800px) {
        font-size: 12px;
    }

    @media (max-width: 600px) {
        font-size: 11px;
    }
`;