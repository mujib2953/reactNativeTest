/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-11 17:13:56 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-16 12:39:16
 */
import React from 'react';

import { 
    // Text,
    View,
    ScrollView,
} from 'react-native';

import {
    Body,
    // Button,
    Card,
    CardItem,
    Container,
    // Content,
    // Footer,
    // FooterTab,
    // Header,
    Icon,
    Input,
    // Left,
    // Right,
    Text,
    // Title,

    Form,
    Item,
    Label,
    Spinner,

    H2,
    H3,
    Button,
    

} from 'native-base';

import {
    Avatar
} from 'react-native-elements';

import {
    getThoughtOfTheDay,
    getUserDetails
} from '../common/apis';

import { connect } from 'react-redux';

import { 
    setThought,
    setUserData
} from '../redux/actions';

import CustomHeader from '../component/CustomHeader';

import styles from '../style';

class GitPage extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            sSearchQry: '',
            isSearched: false
        }
    }

    componentWillMount() {
        getThoughtOfTheDay()
            .then( resp => resp.text() )
            .then( resp => {
                this.props.setThought( resp );
            } );
    }

    render() {

        const { thoughtOfDay, navigation } = this.props;

        return(
            <View
            >
                <CustomHeader
                    name="GitHub"
                    navigation={ navigation }
                />

                <View
                    style={ styles.paddLeftRight }
                >
                    <Form>
                        <Item>
                            {/* <Label>Git Username</Label> */}
                            <Icon name="ios-search" />
                            <Input 
                                placeholder="Git Username" 
                                onChangeText = { ( p_typed ) => this.onSeacrh( p_typed ) } 
                            />
                            <Icon name="ios-people" />
                        </Item>
                        
                        <View style={ styles.spacer }></View>

                        <Button 
                            block
                            onPress={ this.fetchData }
                        >
                            <Text>Find User</Text>
                        </Button>
                    </Form>
                </View>

                <View style={ styles.spacer }></View>

                <View>
                    { this.renderUserDetails() }
                </View>
               
            </View>
        )
    }

    onSeacrh = ( p_typed ) => {
        this.setState( { sSearchQry: p_typed.trim() } );
    }

    fetchData = () => {
        
        const { sSearchQry } = this.state,
            { setUserData } = this.props;

        this.toggleLoader( true );

        if( sSearchQry ) {
            getUserDetails( sSearchQry )
                .then( resp => resp.json() )
                .then( resp => {
                    console.log( 'User Data :: ', resp );

                    setUserData( resp );

                    this.toggleLoader( false );

                } );
        }
            
    }

    renderUserDetails = () => {

        const { isSearched } = this.state,
            { userData } = this.props;

        if( isSearched )
            return <Spinner />

        if( userData )
            return (
                
                <Container style={ styles.gitArea }>
                    
                    <Avatar
                        xlarge
                        rounded
                        source = {{uri: userData.avatar_url }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    
                    <View style={ [styles.divider, styles.gitImg] }></View>
                    
                    <H2>
                        { userData.name || userData.login }
                    </H2>

                    <Card>
                        
                        <CardItem>
                            <Body>
                                <H3>Company</H3>
                                <Text>
                                    APPPP
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Container>
            )

        return null;
    }
    
    
    toggleLoader = ( p_bool ) => {
        this.setState( { isSearched: p_bool } );
    }
}

const mapStateToProps = ( state ) => {
    
    const { gitReducer } = state;

    return {
        thoughtOfDay: gitReducer.thoughtOfDay,
        userData: gitReducer.userData
    };
}

const mapActionToProps = ( dispatchEvent ) => {
    return {
        setThought: ( p_payload ) => { dispatchEvent( setThought( p_payload ) ) },
        setUserData: ( p_payload ) => { dispatchEvent( setUserData( p_payload ) ) }
    };
}

export default connect( mapStateToProps, mapActionToProps )( GitPage );
