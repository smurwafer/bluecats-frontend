import { combineReducers } from 'redux';
import {
    authReducer,
    userReducer,
    galleryReducer,
} from './reducers';

const rootReducer = combineReducers({
  ath: authReducer,
  usr: userReducer,
  gly: galleryReducer,
});

export default rootReducer;