import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    margin: 0px 10px;
`;

export const Display = styled.div`
    cursor: pointer;
    z-index: 0;
    width: 300px;
    height: 180px;
    position: relative;
    border-radius: 10px;
    border: none;
    overflow: hidden;

    @media (max-width: 1000px) {
        width: 270px;
        height: 165px;
    }

    @media (max-width: 600px) {
        width: 255px;
        height: 158px;
    }
`;

export const Text = styled.p`
    font-size: 13px;
    color: #fff;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 12px;
    }

    @media (max-width: 600px) {
        font-size: 11px;
    }
`;

export const Creator = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Profile = styled.div``;

export const Info = styled.div``;

export const Title = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const UserName = styled.p`
    font-size: 13px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 12px;
    }

    @media (max-width: 600px) {
        font-size: 11px;
    }
`;

export const Action = styled.div``;