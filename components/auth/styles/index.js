import styled from 'styled-components/macro';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 500px;
    max-width: 800px;
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    border: 0.5px solid #ccc;
    overflow: hidden;
`;

export const Display = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
`;

export const FieldArea = styled.div`
    flex: 1;
    height: 100%;
`;

export const Form = styled.form`
    height: 100%;
`;

export const FormSection = styled.div`
    position: relative;
    padding: 20px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const FormHeader = styled.div`
    text-align: left;
`;

export const PrevIcon = styled.div`
    cursor: pointer;
`;

export const Text = styled.p`
    font-size: 14px;
    margin: 0;
`;