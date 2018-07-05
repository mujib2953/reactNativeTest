/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 13:35:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 13:38:39
 */
import React from 'react';

import {
    Text,
    View
} from 'react-native';

import {
    connect
} from 'react-redux';

import Part_1 from './part_1';
import Part_2 from './part_2';
import Part_3 from './part_3';

class ReduxTest extends React.Component {
    render() {

        const { count, name } = this.props;

        return(
            <View>

                <Text>
                    The counter value is { count }
                </Text>
                <Text>
                    The user name is { name }
                </Text>

                <Part_1 />
                <Part_2 />
                <Part_3 />
            </View>
        ) 
    }
}

const mapStateToProps = ( state ) => {
    // console.log( state );

    let { count, user_name } = state.countReducer;
    // console.log( count );
    // console.log( 'user_name', user_name );
    return {
        'count': count,
        name: user_name
    };
}

const mapDispatchToProps = dispatchEvent => {
    // console.log( dispatchEvent );

    return {
        test: () => { console.log( 'test' ) }
    };
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)( ReduxTest );
