import styled from "styled-components/macro";

export const Container = styled.div`
    height: 80vh;
    width: 100%;
`;

export const Section = styled.div`
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const Text = styled.p`
    font-size: 17px;
    margin: 0;
`;

export const ButtonSection = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-align: center;
    margin: auto;
`;