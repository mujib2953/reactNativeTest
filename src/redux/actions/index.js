/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 13:49:40 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-13 18:20:01
 */


import {
    INCR,
    DECR,
    UPDATE_NAME,
    SET_THOUGHUT,
    SET_USERDATA
} from './ActionTypes';

export const incrementCounterAction = () => {
    return { type: INCR }
};

export const decrementCounterAction = () => {
    return { type: DECR }
};

export const changeNameAction = ( name ) => {
    return { type: UPDATE_NAME, payload: name }
};

export const setThought = ( p_thought ) => {
    return { type: SET_THOUGHUT, payload: p_thought }
}

export const setUserData = ( p_userObj ) => {
    return { type: SET_USERDATA, payload: p_userObj }
}
