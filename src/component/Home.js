/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 11:56:25 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-13 12:54:05
 */
import React from 'react';

import {
    Text,
    View
} from 'react-native';

import ReduxTest from './ReduxTest';
// import RootNav from './Nav';

class Home extends React.Component {

    render() {

        return(
            <View>
                <Text>This is Home</Text>
                {/* <ReduxTest /> */}
            </View>
            
        )
    }
}

export default Home;
