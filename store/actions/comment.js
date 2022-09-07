import axios from '../../axios-config';
import { header } from '../../utility/header';
import { COMMENT_SUCCESS } from '../action-types';

export const addComment = (token, commentData) => {
    return async dispatch => {
        try {
            await axios.post('comment', commentData, header(token));
            dispatch(commentSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateComment = (token, id, commentData) => {
    return async dispatch => {
        try {
            await axios.put('comment/' + id, commentData, header(token));
            dispatch(commentSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteComment = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('comment/' + id, header(token));
            dispatch(commentSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const commentSuccess = () => ({ type: COMMENT_SUCCESS });