import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    height: 300px;
    width: 230px;
    position: relative;
    background-image: ${({ url }) => `url(${url})`};
    background-size: 100%;
    border-radius: 5px;
    overflow: hidden;
`;

export const Creator = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Profile = styled.div``;

export const Info = styled.div``;

export const Title = styled.p`
    font-size: 18px;
    color: #fff;
    margin: 0;
`;

export const UserName = styled.p`
    font-size: 14px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;