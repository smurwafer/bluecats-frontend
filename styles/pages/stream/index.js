import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Legend = styled.p`
    font-size: 34px;
    font-weight: 500;
    margin-left: 40px;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: 300;
    margin-left: 40px;
`;

export const ChannelList = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto;
`;

export const ChannelItem = styled.div`
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;

    &:first-of-type {
        margin-left: 40px;
    }
`;