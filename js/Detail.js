/**
 * Created by Tiny on 2017/10/24.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class Detail extends React.Component {
    static navigationOptions = {
        title: '��������ҳ',
    };
    render() {
        return (
            <Text>��������ҳ</Text>
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