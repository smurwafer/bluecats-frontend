import styled from 'styled-components/macro';

export const Container = styled.div`
    
`;

export const UpperSection = styled.div`
    padding: 40px;
`;

export const LowerSection = styled.div``;

export const Legend = styled.p`
    font-size: 34px;
    font-weight: 500;

    @media (max-width: 1000px) {
        font-size: 31px;
    }

    @media (max-width: 800px) {
        font-size: 27px;
    }

    @media (max-width: 600px) {
        font-size: 25px;
    }

    @media (max-width: 405px) {
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 300;
    margin: 0;
`;

export const ChannelList = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
`;

export const ChannelItem = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    &:first-of-type {
        margin-left: 40px;
    }
`;