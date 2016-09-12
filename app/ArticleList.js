import React, { Component } from 'react';

import { View, Text, ListView, TouchableHighlight, StyleSheet, Image } from 'react-native';

import ArticleView from './ArticleView';
import articles from '../staticData';

export default class ArticleList extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

		this.state = {
			articles: ds.cloneWithRows(articles)
		};
	}

	render() {
		return(
			<View style={styles.listContainer}>
				<ListView
					dataSource={this.state.articles}
					renderRow={this._renderRow.bind(this)}
				/>
			</View>
		)
	}

	_changeScene(article) {
		this.props.navigator.push({
			component: ArticleView,
			title: 'View Article',
			passProps: { article }
		});
	}

	_renderRow(rowData) {
		return(
			<TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.1)'}
				onPress={() => this._changeScene(rowData) }>
				<View style={styles.container}>
					<Image style={styles.linkImage} 
						source={{uri: rowData.image}} 
					/>
					<View style={styles.textContainer}>
						<Text style={styles.linkTitle}>{rowData.title}</Text>
						<Text style={styles.linkHost}>{rowData.url}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
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
	linkImage: {
		backgroundColor: '#dddddd',
		width: 60,
		height: 60,
		marginRight: 10,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	linkTitle: {
		fontWeight: 'bold',
	},
	linkHost: {
		color: '#999999',
	},
});