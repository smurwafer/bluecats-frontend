import { COMMENT_SUCCESS } from "../action-types";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_SUCCESS:
            return state;
        default:
            return state;
    }
}   

export default reducer;