import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    /* justify-content: center; */
    padding: 0px 20px;
`;

export const TextSection = styled.div`
    flex: 1;
`;

export const IllustrationSection = styled.div`
    text-align: center;
    flex: 1;
`;

export const TextDisplay = styled.div`
    width: 80%;
    margin: auto;

    @media (max-width: 405px) {
        width: 100%;
    }
`;

export const IllustrationDisplay = styled.div`
    /* height: 300px; */
    width: 100%;
    position: relative;
    margin: auto;

    @media (max-width: 1000px) {
        height: 270px;
    }

    @media (max-width: 600px) {
        height: 233px;
    }
`;

export const Text = styled.p`
    width: 100%;
    font-size: 30px;
    font-weight: 300;
    margin: 0;
    line-height: 36px;

    @media (max-width: 1000px) {
        font-size: 23px;
        line-height: 29px;
    }

    @media (max-width: 600px) {
        font-size: 19px;
        line-height: 25px;
    }
`;
