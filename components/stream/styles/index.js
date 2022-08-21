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
`;

export const Text = styled.p`
    font-size: 13px;
    color: #fff;
    margin: 0;
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
`;

export const UserName = styled.p`
    font-size: 13px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Action = styled.div``;