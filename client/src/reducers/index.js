import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import LoginAuthReducer from './LoginAuthReducer';

const appReducer = combineReducers({
    router: routerReducer,
    LoginAuthReducer
});

const reducers = (state, action) => {
    // if (action.type === 'NEW_USER_DATA'){
    //     state = undefined
    //   }
    return appReducer(state, action)
};

export default reducers;