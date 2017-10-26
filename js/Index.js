/**
 * Created by Tiny on 2017/10/24.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class Index extends React.Component {
    static navigationOptions = {
        title: '我是首页',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>我是首页什么辣鸡更新这么慢试试</Text>
                <Text>真的没法玩</Text>
                <Button>牛逼的按钮是是</Button>
            </View>
        )
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