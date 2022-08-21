import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    margin-bottom: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    padding: 10px;
`;

export const ProfileSection = styled.div``;

export const InfoSection = styled.div`
    flex: 1;
`;

export const UserName = styled.p`
    font-size: 15px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
`;

export const Text = styled.p`
    font-size: 13px;
    color: ${() => `${colorMap['secondary'].normal}`};
    margin: 0;
`;

export const ActionSection = styled.div``;

export const Timestamp = styled.p`
    font-size: 13px;
    color: ${() => `${colorMap['secondary'].light1}`};
    margin: 0;
`;

export const ReplyButton = styled.button`
    font-size: 13px;
    color: ${() => `${colorMap['primary'].normal}`};
    margin: 0;
    background: none;
    border: none;
`;