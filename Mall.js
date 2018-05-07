/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React from 'react';
// import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';


// const RootStack = StackNavigator({
//   Home: {
//     screen: Home,
//   },
//   Details: {
//     screen: Detail,
//   },
// });

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Detail,
  },
});