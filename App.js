import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button type="primary">antd-mobile button</Button>
        <Button type="warning" size="small">小按钮11</Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
