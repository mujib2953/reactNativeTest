/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 12:11:09 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-12 13:03:35
 */


import {
    combineReducers
} from 'redux';

// ---- All reducers in the app

import countReducer from './countReducer';
import gitReducer from './gitReducer';

const rootReducer = combineReducers({
    countReducer,
    gitReducer
});

export default rootReducer;
