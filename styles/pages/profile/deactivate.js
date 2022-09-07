import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
`;

export const FormSection = styled.div`
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 405px) {
        width: 100%;
        padding: 15px;
    }
`;

export const Form = styled.form`
    width: 100%;
`;