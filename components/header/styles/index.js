import styled from 'styled-components/macro';

export const Container = styled.div`
    /* height: 50%; */
    width: 100%;
    box-sizing: border-box;
`;

export const Background = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: ${({ url }) => `url(${url}) center no-repeat`};
    background-size: cover;
    background-clip: border-box;
`;

export const Overlay = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 405px) {
        padding: 20px;
    }
`;

export const Detail = styled.div`
    height: 100%;
    width: 45%;

    @media (max-width: 1000px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const EditButtonContainer = styled.div`
    height: 30px;
`;

export const Title = styled.h1`
    text-transform: capitalize;
    color: #fff;
    font-size: 74px;
    font-weight: 700;
    line-height: 80px;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 65px;
        line-height: 70px;
    }

    @media (max-width: 600px) {
        font-size: 59px;
        line-height: 64px;
    }

    @media (max-width: 405px) {
        font-size: 49px;
        line-height: 54px;
    }
`;

export const Description = styled.p`
    color: #fff;
    font-size: 18px;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 16px;
    }
`;

export const Creator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Profile = styled.div``;

export const Info = styled.div`
    text-align: start;
`;

export const Name = styled.p`
    color: #fff;
    margin: 0;
    font-size: 18px;

    @media (max-width: 1000px) {
        font-size: 16px;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const Ratings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Play = styled.div`
    position: absolute;
    cursor: pointer;
    right: 20%;
    top: 40%;
    transform: translate(-50%, 0%);

    @media (max-width: 600px) {
        display: none;
    }
`;