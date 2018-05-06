/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    const { params } = this.props.navigation.state;
    const param1=params.title;
    const param2=params.subTitle;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
              {'详情页面'}
            </Text>

            <Text style={styles.text}>
            {JSON.stringify(param1)}
            </Text>
            
            <Text style={styles.text}>
            {param2}
            </Text>

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize: 20,
      color:'blue',
      // alignSelf: 'center',
      // justifyContent: 'center',
      // alignContent: 'center',
    },
  });