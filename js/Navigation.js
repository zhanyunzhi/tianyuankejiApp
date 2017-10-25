import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './Index';         //首页
import Detail from './Detail';         //详情页

const Navigator = StackNavigator({
  Index: {screen: Index},
  Detail: {screen: Detail}
});

export default class Navigation extends React.Component {

  render() {
    return (
      <Navigator />
    )
  }

}

