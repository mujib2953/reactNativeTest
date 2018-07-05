/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 12:11:09 
 * @Last Modified by: Miujib Ansari
 * @Last Modified time: 2018-07-02 12:15:50
 */


import {
    combineReducers
} from 'redux';

// ---- All reducers in the app

import countReducer from './countReducer';

const rootReducer = combineReducers({
    countReducer
});

export default rootReducer;
