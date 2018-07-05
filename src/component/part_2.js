/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 12:01:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 12:10:53
 */

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    Button
} from 'react-native';

import {
    decrementCounterAction
} from '../redux/actions/index';

class Part_2 extends React.Component {

    render() {
        return(
            <Button
                onPress={() => {
                    this.props.decCount();
                }}
                title="Decriment Count"
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    let count = state.countReducer
    return {
        count
    }
}

const mapActionToProps = ( dispatchEvent ) => {
    return {
        decCount: () => dispatchEvent( decrementCounterAction() )
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)( Part_2 );