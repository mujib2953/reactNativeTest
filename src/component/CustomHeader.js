/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 14:18:53 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 15:08:49
 */
import React from 'react';

import {
    Header
} from 'react-native-elements';

class CustomHeader extends React.Component {

    render() {

        let { name } = this.props;
        
        return(
            <Header
                leftComponent={{ 
                    icon: 'menu',
                    color: '#fff',
                    onPress: () => this.openMenu()
                }}
                centerComponent={{ 
                    text: name,
                    style: { color: '#fff' }
                }}
                rightComponent={{ 
                    icon: 'home', 
                    color: '#fff',
                    onPress: () => this.gotoHome()
                }}
            />
        )
    }

    openMenu = () => {
        const { navigation } = this.props;

        navigation.openDrawer();
    }

    gotoHome = () => {
        const { navigation } = this.props;

        navigation.navigate('Home');
    }
}

export default CustomHeader;
