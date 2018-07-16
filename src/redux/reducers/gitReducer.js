/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-12 12:57:45 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-13 18:20:20
 */

import {
    SET_THOUGHUT,
    SET_USERDATA
} from '../actions/ActionTypes';

const INIT_STATE = {
    thoughtOfDay: 'Thought of the Day',
    userData: null
};

export default gitReducer = ( state = INIT_STATE, action ) => {
    switch( action.type ) {
        case SET_THOUGHUT:
            return { ...state, thoughtOfDay: action.payload };

        case SET_USERDATA:
            return { ...state, userData: action.payload };
        
        default:
            return state;

    }
}
