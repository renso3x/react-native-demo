import React, { Component } from "react";

import { View, Text, ListView, TouchableHighlight, StyleSheet, TextInput } from 'react-native';

const contactList = [	
	{"firstname": 'Romeo', "lname": 'Fee', "contactnum": '09123567'},
	{"firstname": 'John', "lname": 'Doe', "contactnum": '09123567'},
	{"firstname": 'Jane', "lname": 'Yii', "contactnum": '09123567'},
	{"firstname": 'Chu', "lname": 'Yu', "contactnum": '09123567'},
	{"firstname": 'Kitkat', "lname": 'Uy', "contactnum": '09123567'}
];


export default class ViewContainer extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

		this.heroRef = contactList;

		this.state = {
			heroSource: ds.cloneWithRows(contactList)
		};
	}

	render() {
		return (
		  <View style={styles.listContainer}>
		    <View style={styles.titleView}>
		      <Text style={styles.titleText}>
		        Contact Lists
		      </Text>
		    </View>
		    <ListView dataSource={this.state.heroSource} renderRow={this.renderRow.bind(this)}/>
		  </View>
		);
	}

	//render the listview
	renderRow(rowData, sectionID ,rowID) {
		return (
		  <TouchableHighlight
		    underlayColor={'rgba(0, 0, 0, 0.1)'}>
		    <View style={styles.container}>
		      <View style={styles.row}>
		        <Text style={styles.todoText}>{rowData.firstname} {rowData.lname} | #{rowData.contactnum}</Text>
		      </View>
		    </View>
		  </TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch"
	},
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
	},
	titleView:{
		backgroundColor: '#48afdb',
		paddingTop: 30,
		paddingBottom: 10,
		flexDirection: 'row'
	},
	titleText:{
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		flex: 1,
		fontSize: 20,
	},
	row: {
		flexDirection: 'row',
		padding: 12,
		height: 44
	},
	separator: {
		height: 1,
		backgroundColor: '#CCCCCC',
	},
	todoText: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
});