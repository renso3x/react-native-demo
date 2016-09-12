import React, { Component } from "react";

import { StyleSheet, View, Text } from 'react-native';

export default class MoreComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					This is the second tab .
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		textAlign: 'center',
		color: '#FFFFFF'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#123456',
	}
});