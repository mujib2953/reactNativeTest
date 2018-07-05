/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 15:23:29 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 15:24:43
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

class PhotosPage extends React.Component {

    render() {

        const { navigation } = this.props;

        return(
            <View>
                <CustomHeader
                    name="Photos page"
                    navigation={ navigation }
                />
            </View>
        )
    }

}

export default PhotosPage;

