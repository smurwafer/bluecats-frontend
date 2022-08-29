import { CHANNEL_SUCCESS, SET_CHANNELS, SET_CURRENT_USER_CHANNELS } from "../action-types";

const initialState = {
    channels: [],
    currentUserChannels: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANNELS:
            return {
                ...state,
                channels: action.channels,
            };
        case SET_CURRENT_USER_CHANNELS:
            return {
                ...state,
                currentUserChannels: action.currentUserChannels,
            };
        case CHANNEL_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;