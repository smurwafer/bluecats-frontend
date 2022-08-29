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
    background: ${({ url }) => `url(${url}) no-repeat`};
    background-size: 100%;
    background-clip: border-box;
`;

export const Overlay = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Detail = styled.div`
    height: 100%;
    width: 40%;
`;

export const Title = styled.h1`
    text-transform: capitalize;
    color: #fff;
    font-size: 74px;
    font-weight: 700;
    margin: 0;
`;

export const Description = styled.p`
    color: #fff;
    font-size: 18px;
    margin: 0;
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
`;

export const Ratings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Play = styled.div`
    cursor: pointer;
    position: absolute;
    right: 20%;
    top: 40%;
    transform: translate(-50%, 0%);
`;