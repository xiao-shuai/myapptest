import React from 'react';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';

import {One,Two,Three,Four,Login,Register,
  Sign,Detail,Notice,NoticeSys,Edite,Lianxi,
  Search,Fabu
} from '../pages/all'
import {Metrics} from './styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';



const BottomTab = createBottomTabNavigator({
    one: One,
    two: Two,
    // three:Three,
    four:Four,
  },
  {  initialRouteName: 'one',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'one') {
            iconName ='ios-home';
          } else if (routeName === 'two') {
            iconName = 'ios-bookmarks';
          }else if(routeName==='three'){
           iconName='ios-contacts'
          }else{
              iconName='ios-person'
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons 
          //当设备处于横屏时，horizontal 是 true；否则就是false。
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} 
          color={focused?Metrics.themeColor:Metrics.themehui2} />;
        },
      }),
      tabBarOptions: {
        activeTintColor:Metrics.themeColor,
        inactiveTintColor:Metrics.themehui2,
      },
  }
  );

  const AllStack= createStackNavigator({
    One:{
     screen:BottomTab,
     
     navigationOptions: ({ navigation }) => ({
         header:null,
         headerBackTitle:null,
          tabBarLabel:null,
         tabBarOptions:{
          showLabel:false
         }

       })
    }, 
    Two:{
      screen:Two,
      navigationOptions: ({ navigation }) => ({
       
        tabBarLabel: 'Home!',
        tabBarOptions:{
          showLabel:false
         }
      })
    },
    Three:{screen:Three},
    Four:{screen:Four},
    Login:{screen:Login},
    Register:{screen:Register},
    Sign:{screen:Sign},
    Detail:{screen:Detail},
    Notice:{
      screen:Notice,
     
      navigationOptions:({
        title:'我的消息',
        headerBackTitle:null,
      })
    },
    NoticeSys:{
      screen:NoticeSys,
     
      navigationOptions:({
        title:'消息详情',
      })
    },
    Edite:{
      screen:Edite,
     
      navigationOptions:({
        title:'个人设置',
      })
    },
    Lianxi:{
      screen:Lianxi,
     
      navigationOptions:({
        title:'联系我们',
      })
    },
    Search:{
      screen:Search,
      navigationOptions:({
        title:'搜索',
      })
    },
    Fabu:{
      screen:Fabu,
      navigationOptions:({
        title:' 发布',
      })
    },

 })
  
  export default createAppContainer(AllStack);