import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_STREAMING_CHANNEL, SET_STREAMS, STREAM_SUCCESS } from "../action-types";

export const addStreamingChannel = (channelId) => {
    return dispatch => {
        dispatch(setStreamingChannel(channelId));
    }
}

export const fetchStreams = (token) => {
    return async dispatch => {
        try {
            const { data: { streams } } = await axios.get('stream', header(token));
            dispatch(setStreams(streams));
        } catch (err) {
            throw err;
        }
    }
}

const setStreams = (streams = []) => {
    return {
        type: SET_STREAMS,
        streams,
    }
}

export const addStream = (token, streamData) => {
    return async dispatch => {
        try {
            const { data: { stream } } = await axios.post('stream', streamData, header(token));
            dispatch(streamSuccess());
            return stream;
        } catch (err) {
            throw err;
        }
    }
}

export const updateSteam = (token, id, streamData) => {
    return async dispatch => {
        try {
            await axios.put('stream/' + id, streamData, header(token));
            dispatch(streamSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteSteam = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('stream/' + id, header(token));
            dispatch(streamSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const setStreamingChannel = (channelId) => ({ type: SET_STREAMING_CHANNEL, channelId });

const streamSuccess = () => {
    return { type: STREAM_SUCCESS };
}   