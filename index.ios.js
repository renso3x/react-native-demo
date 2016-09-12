import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} from 'react-native';

import ArticleList from './app/ArticleList';
import Forms from './app/Forms';
import Tabs from './app/Tabs';

class AwesomeProject extends Component {

  _handleNavigationRequest() {
    this.refs.nav.push({
      component: Forms,
      title: 'Forms',
    });
  }

  _handleLeftNavReq() {
    this.refs.nav.push({
      component: Tabs,
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.navigator}
        initialRoute= {{
          id: 'ArticleList',
          title: 'TechNews',
          component: ArticleList,
          rightButtonTitle: 'Profile',
          onRightButtonPress: () => this._handleNavigationRequest(),

          leftButtonTitle: 'More',
          onLeftButtonPress: () => this._handleLeftNavReq()
        }}

        // renderScene = {
        //   this.navigatorRenderScene
        // }
      />
    );
  }

  // navigatorRenderScene(route, navigator) {
  //   _navigator = navigator;

  //   switch (route.id) {
  //     case 'First': 
  //       return (
  //         <First navigator={navigator} title="First"/>
  //       )

  //     case 'Second': 
  //       return (
  //         <Second navigator={navigator} title="Second"/>
  //       )
  //     case 'State': 
  //       return (
  //         <State navigator={navigator} title="State"/>
  //       )
  //     case 'ArticleList':
  //       return (
  //         <ArticleList navigator={navigator} title="ArticleList"/>
  //       )
  //   }
  // }

}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
