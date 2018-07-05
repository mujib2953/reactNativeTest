/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 11:56:11 
 * @Last Modified by: Miujib Ansari
 * @Last Modified time: 2018-07-02 12:16:46
 */

import {
    createStore
} from 'redux';

// --- Reducer
import rootReducer from '../reducers';

const rootStore = createStore( rootReducer );

export default rootStore;