import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import Feed from '../screens/Feed';
import Login from '../screens/Login';

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import igtv from '../../assets/igtv.png';
import send from '../../assets/send.png';


// Local onde se informados qual são as rotas
const mainNavigation = createStackNavigator({
  
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: '',
      headerStyle: {
        height: 0,
        width: 0,
      }
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: <Image source={logo} />,
      headerLeft: ( 
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Image source={camera} />
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image source={igtv} />
          </TouchableOpacity>
  
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image source={send} />
          </TouchableOpacity>
        </View>
      )
    }

  }
  }, {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(mainNavigation);