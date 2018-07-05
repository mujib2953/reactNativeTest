/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 14:00:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 15:05:06
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

class HomePage extends React.Component {

    render() {

        const { navigation } = this.props;

        return(
            <View>
                <CustomHeader
                    name="Home"
                    navigation={ navigation }
                />
            </View>
        )
    }

}

export default HomePage;

