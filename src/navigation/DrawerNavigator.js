import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Client from '../components/ClientComponent';
import BottomTabNavigator from './BottomTabNavigator';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={StackNavigator} />
      {/* <Drawer.Screen name="Client" component={Client} />*/}
      
    </Drawer.Navigator>
  );
};

export default MainNavigator;
