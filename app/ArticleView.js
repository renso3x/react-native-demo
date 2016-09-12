import React, { Component } from 'react';

import { WebView } from 'react-native';

export default class ArticleView extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return(
			<WebView source={{uri: this.props.article.url}} />
		)
	}
}