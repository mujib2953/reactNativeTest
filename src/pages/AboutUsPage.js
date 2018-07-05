/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-05 15:27:46 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 17:54:35
 */
import React from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    View
} from 'react-native';

import CustomHeader from '../component/CustomHeader';

import styles from '../style';

class AboutUsPage extends React.Component {

    render() {

        const { navigation } = this.props,
            nScreenHt = Dimensions.get( 'window' ).height;

        return(
            <View
                style={{ height: nScreenHt }}
            >
                <CustomHeader
                    name="About Us"
                    navigation={ navigation }
                />

                <ScrollView
                    style={ styles.AU_scollContainer }
                >
                    <Text style={ styles.AU_h3 }>About T20 Mumbai</Text>
                    
                    <View style={ styles.divider } />

                    <Text style={ styles.paragraphTag }>
                        Aimed at bringing the best local cricket talent of Mumbai under a
                        common umbrella, T20 Mumbai is a league to identify, develop and
                        promote cricketers at the grassroots level. T20 Mumbai will provide
                        more structure to the cricket scene in the city and endeavour to
                        build a platform for bringing the future superstars of the sport
                        together.
                    </Text>

                    <Text style={styles.paragraphTag}>
                        Conceptualised by the Mumbai Cricket Association (MCA), T20 Mumbai
                        will see them partner with Wizcraft International Entertainment Pvt.
                        Ltd., India Infoline Ltd. (IIFL) and Probability Sports.
                    </Text>
                    
                    <Text style={styles.h3}>About MCA</Text>
                    
                    <View style={styles.divider} />
                    
                    <Text style={styles.paragraphTag}>
                        Established in 1930, the Mumbai Cricket Association (MCA) is the
                        governing body for cricket in Mumbai, Greater Mumbai and Thane
                        districts. MCA is a permanent member of the Board of Control for
                        Cricket in India (BCCI), and houses its headquarters within the
                        Wankhede Stadium premises.
                    </Text>
                    <Text style={styles.paragraphTag}>
                        MCA has developed a rich cricket heritage in Mumbai. Such has been
                        their influence that Mumbai has given the country more than 60 Test
                        cricketers so far. There was even a time when the Indian playing
                        eleven consisted of six to seven cricketers from Mumbai – a
                        testament to how good they have been at the highest level.
                    </Text>
                    <Text style={styles.paragraphTag}>
                        MCA has taken on the onus of building new infrastructure for
                        cricket. They have developed Recreation Centres at the Bandra Kurla
                        Complex, and also in Kandivali where they house some of the best,
                        cutting-edge sports facilities.
                    </Text>

                    <Text style={styles.h3}>About Wizcraft</Text>
                    <View style={styles.divider} />

                    <Text style={styles.paragraphTag}>
                    
                        <Text style={styles.boldTag}>
                            Wizcraft International Entertainment Pvt. Ltd
                        </Text>{' '}
                        is one of India’s leading Communication and Entertainment companies,
                        integrating strategy, creativity and technology to provide unique
                        experiences. With a depth of expertise in experiential marketing,
                        Wizcraft boasts of having some of the biggest players in the market
                        among their clientele.
                    </Text>

                    <Text style={styles.paragraphTag}>
                        Wizcraft believes in creating experiences and their staunch belief
                        is that an event may be forgotten, but an experience will last a
                        lifetime. Their extensive experience in pulling off some of the
                        biggest events consistently for years has made Wizcraft a pioneer in
                        the events, exhibitions, activations, television, PR and digital
                        space. They have been instrumental in shaping the event management
                        industry in India.
                    </Text>

                    <Text style={styles.h3}> About Probability Sports</Text>
                    <View style={styles.divider} />
                    
                    <Text style={styles.paragraphTag}>
                        <Text style={styles.boldTag}>Probability Sports</Text>
                        is a Special Purpose Vehicle (SPV) between IIFL SEED VENTURES FUND 1
                        and Wizcraft, with Kadar Makani at the helm supported by a team of
                        specialists.
                    </Text>

                    <Text style={styles.paragraphTag}>
                        Probability Sports will plan, market and execute T20 Mumbai League
                        in its entirety, and ensure its grand success. With a vision to
                        identify local talent in the cricket-rich city of Mumbai,
                        Probability Sports will give aspiring cricketers in the city a
                        platform to grow and better themselves as cricketers.
                    </Text>
                </ScrollView>

            </View>
        )
    }

}

export default AboutUsPage;

