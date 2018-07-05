/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 13:49:40 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 12:49:37
 */


import {
    INCR,
    DECR,
    UPDATE_NAME
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