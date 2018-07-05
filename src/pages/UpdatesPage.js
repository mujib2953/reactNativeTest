/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 15:15:40 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 15:16:00
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

class UpdatesPage extends React.Component {

    render() {

        const { navigation } = this.props;

        return(
            <View>
                <CustomHeader
                    name="Latest Updates"
                    navigation={ navigation }
                />
            </View>
        )
    }

}

export default UpdatesPage;

