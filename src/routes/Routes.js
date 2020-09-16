import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


//import all the screens we are going to switch 
const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }, 
  },
  {
            initialRouteName: 'Home',
            defaultNavigationOptions: {
                // header: null,
                headerShown: false
            }
        },
);
export default createAppContainer(MainNavigator);