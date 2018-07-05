/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 15:29:05 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 18:27:27
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

import styles from '../style';

class StandingPage extends React.Component {

    render() {

        const { navigation } = this.props;

        return(
            <View>
                <CustomHeader
                    name="Standings"
                    navigation={ navigation }
                />

                <View>
                    <View style={styles.std_Container}>
                        <View style={styles.std_headerContainer}>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>RANK</Text>
                            </View>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>TEAMS</Text>
                            </View>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>MP</Text>
                            </View>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>W</Text>
                            </View>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>L</Text>
                            </View>

                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>NRR</Text>
                            </View>
                            <View style={styles.std_viewStyleOne}>
                                <Text style={styles.std_textStyle}>PTS</Text>
                            </View>
                        </View>

                        <View style={styles.std_bodyRow}>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>ss</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>5</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>4</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>

                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>+1.441</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>10</Text>
                            </View>
                        </View>

                        <View style={styles.std_bodyRow}>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>ss</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>5</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>4</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>

                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>+1.441</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>10</Text>
                            </View>
                        </View>

                        <View style={styles.std_bodyRow}>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>ss</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>5</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>4</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>

                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>+1.441</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>10</Text>
                            </View>
                        </View>

                        <View style={styles.std_bodyRow}>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>ss</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>5</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>4</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>

                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>+1.441</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>10</Text>
                            </View>
                        </View>

                        <View style={styles.std_bodyRow}>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>ss</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>5</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>4</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>1</Text>
                            </View>

                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>+1.441</Text>
                            </View>
                            <View style={styles.std_viewStylebody}>
                                <Text style={styles.std_textStyleBody}>10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

export default StandingPage;

