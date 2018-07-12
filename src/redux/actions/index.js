/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 13:49:40 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-12 13:08:08
 */


import {
    INCR,
    DECR,
    UPDATE_NAME,
    SET_THOUGHUT
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
