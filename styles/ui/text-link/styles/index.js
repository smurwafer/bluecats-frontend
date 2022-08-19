import Link from 'next/link';
import styled from 'styled-components/macro';
import colorMap from '../../utility/color-config';

export const TxtLink = styled(Link)``;

export const Text = styled.p`
    cursor: pointer;
    color: ${() => `${colorMap['primary'].normal}`};
    font-size: ${({ fontSize }) => fontSize + 'px'};
    margin: 0;
`;