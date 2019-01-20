import React from 'react';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';

import {One,Two,Three,Four,Login,Register,Sign} from '../pages/all'

import Ionicons from 'react-native-vector-icons/Ionicons';



const BottomTab = createBottomTabNavigator({
    one: One,
    two: Two,
    three:Three,
    four:Four,
  },
  {  initialRouteName: 'one',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'one') {
            iconName ='logo-hackernews';
          } else if (routeName === 'two') {
            iconName = 'logo-windows';
          }else if(routeName==='three'){
           iconName='ios-contacts'
          }else{
              iconName='logo-linkedin'
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons 
          //当设备处于横屏时，horizontal 是 true；否则就是false。
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={focused?'red':'gold'} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
  }
  );

  const AllStack= createStackNavigator({
    One:{
     screen:BottomTab,
     navigationOptions: ({ navigation }) => ({
         header:null
       })
    }, 
    Two:{screen:Two},
    Three:{screen:Three},
    Four:{screen:Four},
    Login:{screen:Login},
    Register:{screen:Register},
    Sign:{screen:Sign}
 })
  
  export default createAppContainer(AllStack);