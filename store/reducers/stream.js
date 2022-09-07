import { SET_STREAMING_CHANNEL, SET_STREAMS, STREAM_SUCCESS } from "../action-types";

const initialState = {
    channelId: null,
    streams: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STREAMING_CHANNEL:
            return {
                ...state,
                channelId: action.channelId,
            };
        case SET_STREAMS:
            return {
                ...state,
                streams: action.streams,
            }
        case STREAM_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;