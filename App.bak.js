import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Index from './js/Index';         //首页

export default class App extends React.Component {

  render() {
    let defaultName = '首页';
    let defaultComponent = Index;

    return (
      <Navigator
        initialRoute = {{name: defaultName, component: defaultComponent}}
        configureScene = {
          (route) => {
            return Navigator.SceneConfigs.FloatFromRight
          }
        }
        renderScene = { (route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator = {navigator} />
        }}
        />
    )

  }

}

