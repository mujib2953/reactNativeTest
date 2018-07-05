/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 12:11:26 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 12:47:06
 */
import React from 'react';

import {
    Button,
    Text,
    View,
    TextInput
} from 'react-native'

import {
    connect
} from 'react-redux';

import {
    changeNameAction
} from '../redux/actions/index';

class Part_3 extends React.Component {

    userName = '';

    render() {
        return(
            <View>
                <Text>
                    Change User Name
                </Text>

                <TextInput
                    onChangeText={(text) => this.userName = text }   
                />
                <Button
                    title= 'Press to Change'
                    onPress = {() => {
                        this.props.updateName( this.userName );
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = ( state ) => {
    let name = state.countReducer;
    return {
        name
    };
}

const mapActionToProps = ( dispatchEvent ) => {
    
    return {
        updateName: ( p_text ) => { dispatchEvent( changeNameAction( p_text ) ) }
    };
}


export default connect(
    mapStateToProps,
    mapActionToProps
)( Part_3 );

