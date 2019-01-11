import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import {One,Two,Three,Four,Login,Register} from '../pages/all'

const TabNavigator = createBottomTabNavigator({
    One: One,
    Two: Two,
    Three:Three,
    Four:Four,
  });
  
  
  export default createAppContainer(TabNavigator);