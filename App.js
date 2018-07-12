/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 11:56:20 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-11 17:55:19
 */
import React from 'react';

import {
	StatusBar
} from 'react-native';

import RootNav from './src/component/Nav';

import {
	Provider
} from 'react-redux';

import rootStore from './src/redux/store';

import Expo from "expo";

export default class App extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			is_font_loaded: false
		}
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
		  'Roboto': require('native-base/Fonts/Roboto.ttf'),
		  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
		});

		StatusBar.setHidden( true );

		this.setState( { is_font_loaded: true } );
	}
	  

	render() {

		const { is_font_loaded } = this.state;

		if( !is_font_loaded )
			return ( <Expo.AppLoading /> )

		return (
			<Provider store={ rootStore }>
				{/* <Home /> */}
				<RootNav />
			</Provider>
		)
	}
}
