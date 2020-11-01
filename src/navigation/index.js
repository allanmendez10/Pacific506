import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './DrawerNavigator';
import BottomTab from './BottomTabNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      
      <MainNavigator />
    
    </NavigationContainer>
  );
}


