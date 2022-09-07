import { combineReducers } from 'redux';
import {
    authReducer,
    userReducer,
    galleryReducer,
    streamReducer,
    commentReducer,
} from './reducers';

const rootReducer = combineReducers({
  ath: authReducer,
  usr: userReducer,
  gly: galleryReducer,
  stm: streamReducer,
  cmt: commentReducer
});

export default rootReducer;