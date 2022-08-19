import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 500px;
    justify-content: space-between;
`;

export const HeaderTextSection = styled.div`
    flex: 1;
    justify-content: center;
`;

export const HeaderDisplaySection = styled.div`
    flex: 1;
    justify-content: center;
`;

export const HeaderTextArea = styled.div`
    margin: auto;
    width: 80%;
`;

export const HeaderLabel = styled.h1`
    text-transform: capitalize;
    font-weight: 700;
    font-size: 70px;
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const HeaderDisplay = styled.div`
    height: 400px;
    width: 600px;
    border-radius: 20px;
    overflow: hidden;  
    margin: auto;
    border: 0.5px solid #ccc;
`;

export const HeaderPhoto = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
