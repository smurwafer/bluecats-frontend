import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    position: fixed;
`;

export const SearchSection = styled.div`
    flex: 3;
`;

export const ResultSection = styled.div`
    flex: 7;
`;

export const TabSection = styled.div`
    width: 100%;
`;

export const ResultArea = styled.div`
    height: 600px;
    display: flex;
    /* width: fit-content; */
    overflow: auto;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    align-items: flex-start;
`;