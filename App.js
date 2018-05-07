import React, { /* Component */ } from 'react';
// import { Text, View } from 'react-native';
import { TabNavigator,/*  TabBarBottom */ } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Mall from './Mall';
import More from './More';
import { Platform } from 'react-native';
// import { Container, Icon, Button, Footer, FooterTab } from 'native-base';

// const RootStack = TabNavigator({
//   Mall: {
//     screen: Mall,
//   },
//   More: {
//     screen: More,
//   },
// },
//   {
//     navigationOptions: {
//       tabBarVisible: false
//     }
//   }
// );

// type Props = {};
// export default class App extends Component<Props> {

//   constructor(Props) {
//     super(Props);
//     this.state = {
//       selectedTab: 'Mall',
//     };
//     this.renderContent=()=>{
//       if (this.state.selectedTab === 'Mall') {
//         RootStack.props.navigation.navigate('Mall')
//       }
//       if (this.state.selectedTab === 'More') {
//         RootStack.props.navigation.navigate('More')
//       }
//     };
//   }



//   render() {
//     return (

//       <Container>
//         <RootStack>
//         {RootStack._renderContent}
//         </RootStack>
//         <Footer>
//           <FooterTab>
//             <Button
//               active={this.state.selectedTab === 'Mall'}
//               onPress={() => this.setState({ selectedTab: 'Mall' })}
//             >
//               <Icon name="ios-cart"></Icon>
//             </Button>
//             <Button
//               active={this.state.selectedTab === 'More'}
//               onPress={() => this.setState({ selectedTab: 'More' })}
//             >
//               <Icon name="ios-more"></Icon>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     )
//   }
// }


export default TabNavigator(
  {
    Mall: { screen: Mall },
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
    tabBarOptions: Platform.select({
      ios:{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      android:{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        showIcon:true,
        showLabel:false
      },
    }),
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);