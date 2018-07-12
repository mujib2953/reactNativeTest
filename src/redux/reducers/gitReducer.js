/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-12 12:57:45 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-12 13:26:36
 */

import {
    SET_THOUGHUT
} from '../actions/ActionTypes';

const INIT_STATE = {
    thoughtOfDay: 'Thought of the Day'
};

export default gitReducer = ( state = INIT_STATE, action ) => {
    switch( action.type ) {
        case SET_THOUGHUT:
            return { ...state, thoughtOfDay: action.payload };
        
        default:
            return state;

    }
}
