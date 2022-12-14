import Link from 'next/link';
import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div``;

export const Text = styled.p`
    cursor: pointer;
    text-transform: capitalize;
    margin: 0;
    font-size: ${({ fontSize }) => fontSize + 'px'};
    font-weight: 600;

    ::first-letter {
        color: ${() => colorMap['primary'].normal};
    }
`;