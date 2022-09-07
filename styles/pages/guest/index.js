import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const HeaderTextSection = styled.div`
    flex: 1;
    justify-content: center;
`;

export const HeaderDisplaySection = styled.div`
    flex: 1;
    justify-content: center;

    @media (max-width: 850px) {
        display: none;
    }
`;

export const HeaderTextArea = styled.div`
    /* margin: auto; */
    width: 80%;

    @media (min-width: 1250px) {
        margin: auto;
    }

    @media (max-width: 850px) {
        margin: auto;
    }
`;

export const HeaderLabel = styled.h1`
    text-transform: capitalize;
    font-weight: 700;
    font-size: 67px;
    line-height: 73px;

    @media (min-width: 1250px) {
        margin: auto;
        text-align: center;
    }

    @media (max-width: 1000px) {
        font-size: 63px;
        line-height: 68px;
    }

    @media (max-width: 850px) {
        text-align: center;
    }

    @media (max-width: 600px) {
        font-size: 58px;
        line-height: 63px;
    }

    @media (max-width: 405px) {
        font-size: 46px;
        line-height: 52px;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HeaderDisplay = styled.div`
    position: relative;
    height: 400px;
    width: 600px;
    border-radius: 20px;
    overflow: hidden;  
    margin: auto;
    border: 0.5px solid #ccc;

    @media (max-width: 1000px) {
        height: 350px;
        width: 500px;
    }
`;

export const HeaderPhoto = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
