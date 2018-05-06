import React from 'react';
// import { Text, View } from 'react-native';
import { TabNavigator,TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Nav from './Nav';
import More from './More';

// const RootStack = TabNavigator({
//   Nav: {
//     screen: Nav,
//   },
//   more: {
//     screen: More,
//   },
// });

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }


export default TabNavigator(
  {
    Mall: { screen: Nav },
    More: { screen: More },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Mall') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        } else if (routeName === 'More') {
          iconName = `ios-more${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons 
          name={iconName} 
          size={25} 
          color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);