import Link from 'next/link';
import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: space-between;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Navitem = styled.div`
    padding: 20px;
`;

export const Navlink = styled(Link)``;