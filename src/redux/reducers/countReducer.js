/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 12:06:19 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 12:50:17
 */

import {
    INCR,
    DECR,
    UPDATE_NAME
} from '../actions/ActionTypes';

const INIT_STATE = {
    count: 0,
    user_name: 'Test User'
};

export default countReducers = ( state = INIT_STATE, actions ) => {

    switch( actions.type ) {

        case INCR:
            return { ...state, count: state.count + 1  };

        case DECR:
        return { ...state, count: state.count - 1  };

        case UPDATE_NAME:
        return { ...state, user_name: actions.payload };

        default:
            return state;

    }

}