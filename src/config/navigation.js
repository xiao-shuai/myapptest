import React from 'react';
import { 
  createBottomTabNavigator, 
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';

import {One,Two,Three,Four,Login,Register,
  Sign,Detail,Notice,NoticeSys,Edite,Lianxi,
  Search,Fabu,Forgot, Start,Detail2,Feedback,
  Like,Find,Findxq
} from '../pages/all'
import {Metrics} from './styleconfig'
import Ionicons from 'react-native-vector-icons/Ionicons';



  export const BottomTab = createBottomTabNavigator({
   
    find:Find,
    one: One,
    two: Two,
    four:Four,
  },
  {  initialRouteName: 'find',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'one') {
            iconName ='ios-list-box';
          } else if (routeName === 'two') {
            iconName = 'ios-bookmarks';
          }else if(routeName==='find'){
           iconName='ios-home'
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
    Login:{screen:Login,
      navigationOptions:({
        header:null,
        headerBackTitle:null,
      })
    },
    Register:{screen:Register},
    Sign:{screen:Sign},
    Detail:{screen:Detail,navigationOptions:({
      title:'Details',
      headerBackTitle:null,
    })},
    Detail2:{screen:Detail2,
      navigationOptions:({
        title:'Details',
        headerBackTitle:null,
      })},
    Notice:{
      screen:Notice,
     
      navigationOptions:({
        title:'My news',
        headerBackTitle:null,
      })
    },
    NoticeSys:{
      screen:NoticeSys,
     
      navigationOptions:({
        title:'Message details',
      })
    },
    Edite:{
      screen:Edite,
     
      navigationOptions:({
        title:'Personal Settings',
      })
    },
    Lianxi:{
      screen:Lianxi,
     
      navigationOptions:({
        title:'Contact us',
      })
    },
    Search:{
      screen:Search,
      navigationOptions:({
        title:'Search',
      })
    },
    Fabu:{
      screen:Fabu,
      navigationOptions:({
        title:'Release',
      })
    },
    Forgot:{
      screen:Forgot,
      navigationOptions:({
       
      })
    },
    Feedback:{
      screen:Feedback,
      navigationOptions:({
        title:'Feedback',
      })
    },
    Start:{
      screen:Start,
      navigationOptions:({
        title:'Collection',
      })
    },
    Like:{
      screen:Like,
      navigationOptions:({
        title:'Like',
      })
    },
    Find:{
      screen:Find,
      navigationOptions:({
        // title:'Like',
      })
    },
    Findxq:{
      screen:Findxq,
      navigationOptions:({
        title:'details',
      })
    },

 })
  
  export default createAppContainer(AllStack);