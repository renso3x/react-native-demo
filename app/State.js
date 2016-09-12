import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native';

export default class State extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Playing with state...'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.smallText}> {this.state.text} </Text>
				<TextInput 
					style={styles.input}
					onChangeText={(text) => this.setState({text}) }
					value={this.state.text}
				/>
				<Text style={styles.smallText}>Type input above.</Text>
				<TouchableHighlight
					onPress={this.goToSecond.bind(this)}>
					<Text>Go to Second View.</Text>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={this.goToFirst.bind(this)}>
					<Text>Go to First View.</Text>
				</TouchableHighlight>
			</View>
		)
	}

	goToSecond() {
		this.props.navigator.push({
			id: 'Second'
		})
	}

	goToFirst() {
		this.props.navigator.push({
			id: 'First'
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#dddfd4'
	},

	smallText: {
		flex: 1,
		fontSize: 20,
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20,
		color: '#173e3c'
	},
	input: {
		height: 40,
		borderColor: 'black',
		borderWidth: 2,
		textAlign: 'center',
	}
});