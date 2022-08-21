import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 20;
    position: absolute;
    top: ${({ top }) => top ? '10px' : 'auto'};
    left: ${({ left }) => left ? '10px' : 'auto'};
    right: ${({ right }) => right ? '10px' : 'auto'};
    bottom: ${({ bottom }) => bottom ? '10px' : 'auto'};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #fff;
    margin: 0;
`;