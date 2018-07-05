/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 13:04:53 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 13:33:18
 */

import React from 'react';

import {
    Button,
    View
} from 'react-native';

import {
    connect
} from 'react-redux';

import {
    incrementCounterAction
} from '../redux/actions';

import styles from '../style';

class Part_1 extends React.Component {
    render() {
        console.log( this.props )

        return(
            <View
                style={ styles.incr_btn }
            >
                <Button
                    onPress={() => {
                        this.props.incrCount();
                    }}
                    title="Increment Count"
                />

            </View>
            
        )
    }
}

const mapStateToProps = ( state ) => {
    let count = state.countReducer;

    return {
        count
    }
}

const mapActionsToProps = ( dispatch ) => {
    return {
        incrCount: () => dispatch( incrementCounterAction() ),
        test: () => { console.log( 'validation' ) }
    };
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Part_1);