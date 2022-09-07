import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    position: fixed;

    @media (max-width: 800px) {
        display: block;
    }
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
    height: 550px;
    overflow: scroll;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 300px;
    gap: 10px;
`;