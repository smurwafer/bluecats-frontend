import axios from '../../axios-config';
import { header } from '../../utility/header';
import { CHANNEL_SUCCESS, SET_CHANNELS, SET_CURRENT_USER_CHANNELS } from '../action-types';

export const fetchChannels = (token) => {
    return async dispatch => { 
        try { 
            const { data: { channels } } = axios.get('channel', header(token));
            dispatch(setChannels(channels));
        } catch (err) { 
            throw err;
        }
    };
}

const setChannels = (channels) => {
    return {
        type: SET_CHANNELS,
        channels,
    };
}

const fetchCurrentUserChannels = (token, userId) => {
    return async dispatch => { 
        try { 
            const { data: { channels } } = axios.get('channel?holder=' + userId, header(token));
            dispatch(setCurrentUserChannels(channels));
        } catch (err) { 
            throw err;
        }
    };
}

const setCurrentUserChannels = (channels) => {
    return {
        type: SET_CURRENT_USER_CHANNELS,
        channels,
    };
}

export const addChannel = (token, channelData) => {
    return async dispatch => { 
        try { 
            axios.post('channel', channelData, header(token));
            dispatch(channelSuccess());
        } catch (err) {
            throw err;
        }
    };
}

export const updateChannel = (token, id, channelData) => {
    return async dispatch => { 
        try { 
            axios.put('channel/' + id, channelData, header(token));
            dispatch(channelSuccess());
        } catch (err) {
            throw err;
        }
    };
}

export const deleteChannel = (token, id) => {
    return async dispatch => { 
        try { 
            axios.delete('channel/' + id, header(token));
            dispatch(channelSuccess());
        } catch (err) {
            throw err;
        }
    };
}

const channelSuccess = () => {
    return {
        type: CHANNEL_SUCCESS,
    };
}