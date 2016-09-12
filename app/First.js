import React, { Component} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

export default class First extends Component {

	render() {
		return( 
			<View style={styles.container}>
				<Text style={styles.largeText}>
					I Made my first view
				</Text>
				<TouchableHighlight 
					style={styles.button}
					onPress={this.onBtnPress.bind(this)}>
					<Text style={styles.buttonText}>Go to second view.</Text>
				</TouchableHighlight>
			</View>
		)
	}

	onBtnPress() {
		this.props.navigator.push({
			id: 'Second'
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	largeText: {
		flex: 1,
		fontSize: 30,
		paddingTop: 50,
		paddingRight: 20,
		paddingLeft: 20,
		color: 'limegreen'
	},

	button: {
		flex: 1,
		width: 300,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},

	buttonText: {
		color: 'white',
	}
});
