/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-11 17:13:56 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-12 17:16:46
 */
import React from 'react';

import { View, ScrollView } from 'react-native';

import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Header,
    Icon,
    Input,
    Left,
    Right,
    Text,
    Title,

    Form,
    Item,
    Label,
    Spinner,

    H2,
    

} from 'native-base';

import {
    Avatar
} from 'react-native-elements';

import {
    getThoughtOfTheDay
} from '../common/apis';

import { connect } from 'react-redux';

import { setThought } from '../redux/actions';

import styles from '../style';

class GitPage extends React.Component {

    componentWillMount() {
        getThoughtOfTheDay()
            .then( resp => resp.text() )
            .then( resp => {
                this.props.setThought( resp );
            } );
    }

    render() {

        const { thoughtOfDay } = this.props;

        return(
            <Container fixed>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header...</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text style={ styles.tOfTheDay }>
                        "{ thoughtOfDay }"
                    </Text>
                    <View style={ styles.divider } />

                    <Form>
                        <Item stackedLabel>
                            <Label>Git Username</Label>
                            <Input onChangeText={ ( p_typed ) => this.onSeacrh( p_typed ) } />
                        </Item>
                    </Form>
                    <Button block
                        onClick={ () => { console.log( 'clicked....' ); } }
                    >
                        <Text>Fetch</Text>
                    </Button>

                    { this.renderUserDetails() }

                    <ScrollView>
                        
                    </ScrollView>
                </Content>
                {/* <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
            </Container>
        )
    }

    onSeacrh = ( p_typed ) => {
        console.log( p_typed );
    }

    fetchData = () => {
        console.log( 'submitted...' );
    }

    renderUserDetails = () => {

        const { isLoading } = this.props;

        // if( isLoading ) {
            return (
              
                    <Container style={ styles.gitArea }>
                        <Avatar
                            xlarge
                            rounded
                            source={{uri: "https://avatars0.githubusercontent.com/u/17664474?v=4"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            style={{ marginBottom: 100 }}
                        />
                    
                        <View style={ styles.divider }></View>
                        
                        <H2>User Name</H2>



                    </Container>
            )
        // } else {
        //     return <Spinner />
        // }

    }
    
}

const mapStateToProps = ( state ) => {
    
    const { gitReducer } = state;

    return {
        thoughtOfDay: gitReducer.thoughtOfDay
    };
}

const mapActionToProps = ( dispatchEvent ) => {
    return {
        setThought: ( p_payload ) => { dispatchEvent( setThought( p_payload ) ) }
    };
}

export default connect( mapStateToProps, mapActionToProps )( GitPage );
