import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import CustomComponent from './components/CustomComponent';

export default class Second extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.largeText}>
					We are going to navigate to this component from First.js
				</Text>
				<CustomComponent 
					message="With Attitude"
					objects={
						{
							'key1': 'Yes',
							'key2': 'No'
						}
					}
					arrays={
						[
							'Task1',
							'Task2',
							'Task3',
							'Task4',
						]
					}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#dddfd4'
	},

	largeText: {
		flex: 1,
		fontSize: 52,
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20,
		color: '#173e3c'
	}
});
