/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 15:26:21 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 15:26:41
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

class VideosPage extends React.Component {

    render() {

        const { navigation } = this.props;

        return(
            <View>
                <CustomHeader
                    name="Videos Page"
                    navigation={ navigation }
                />
            </View>
        )
    }

}

export default VideosPage;

