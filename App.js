/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-02 11:56:20 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-05 13:59:02
 */
import React from 'react';

import {
	View,
	Text
} from 'react-native';

import Home from './src/component/Home';
import RootNav from './src/component/Nav';

import {
	Provider
} from 'react-redux';

import rootStore from './src/redux/store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={ rootStore }>
				{/* <Home /> */}
				<RootNav />
			</Provider>
		)
	}
}
