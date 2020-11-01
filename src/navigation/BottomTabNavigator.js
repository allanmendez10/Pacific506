import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import PostNavigator from './StackNavigator';
import User from '../components/ClientComponent'; 
import Home from '../components/MainContainer'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator  tabBarOptions={{
      activeTintColor: '#0166BF',
      inactiveTintColor: '#253645',
    }} lazy>
      {/*<Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={PostNavigator}
      /> */}

<Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} name="Home" component={Home} />

      <Tab.Screen options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="person" color={color} size={26} />
          ),
        }} name="Profile" component={User} />
        
    </Tab.Navigator>
  );
}
