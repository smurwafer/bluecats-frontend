import styled from 'styled-components/macro';
import colorMap from '../../../styles/ui/utility/color-config';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${() => `${colorMap['secondary'].light2}`};
    height: 100%;
`;

export const CommentListSection = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const CommentInputSection = styled.div`
    padding: 20px;
`;

export const Dummy = styled.div`
    float: left;
    clear: both;
`;