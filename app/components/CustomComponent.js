import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class CustomComponent extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.attitude}>
					{this.props.message}
				</Text>
				<Text style={styles.attitude}>
					{this.props.objects['key1']}
				</Text>
				<Text style={styles.attitude}>
					{this.props.arrays[1]}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	attitude: {
		fontSize: 26,
		color: 'lightgreen'
	}
});