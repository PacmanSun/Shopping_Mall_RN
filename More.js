/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
// import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';

export default class More extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.web}
          source={{ uri: 'https://sina.cn/' }}
        >
        </WebView>
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
  web: {
    // flex: 1,
    width: Dimensions.get('window').width,
    marginTop: Platform.select({
      ios:20,
      android:0,
    }),
    // height: 200,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});