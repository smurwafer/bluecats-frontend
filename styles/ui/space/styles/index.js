import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Vertical = styled.div`
    height: ${({ vertical }) => vertical + 'px'};
`;

export const Horizontal = styled.div`
    width: ${({ horizontal }) => horizontal + 'px'};
`;

export const Flexed = styled.div`
    flex: 1;
`;