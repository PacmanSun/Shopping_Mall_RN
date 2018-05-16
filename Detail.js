/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Container, Content } from 'native-base';
import { Image } from 'react-native';
// import { ScrollView } from 'react-native';

const LOCAL_HOST = '10.0.0.11'
const SEVER_URL = 'http://' + LOCAL_HOST + ':3000';

type Props = {};
export default class Detail extends Component<Props> {

  // constructor(Props) {
  //   super(Props);

  //   this.state = {
  //     productID: id,
  //     productTitle: title,
  //     productSubTitle: subTitle
  //   };
  // }

  render() {
    const { params } = this.props.navigation.state;
    const id = params.product.id;
    const title = params.product.title;
    const subTitle = params.product.subTitle;
    const image = params.product.image;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {'详情页面'}
        </Text>
        <Text style={styles.text}>
          id: {id}
        </Text>
        <Text style={styles.text}>
          title: {title}
        </Text>

        <Text style={styles.text}>
          subTitle: {subTitle}
        </Text>

        <Text style={styles.text}>
          image: {image}
        </Text>
        <Image style={{ flex: 1, }}
          source={{ uri: SEVER_URL + String(image).substr(7) }}
        >
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 30,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});