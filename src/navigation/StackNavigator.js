import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainContainer from '../components/MainContainer';
import User from '../components/ClientComponent';
import Bill from '../components/BillComponent';
import HomeTabs from '../navigation/BottomTabNavigator'
//import PostDetails from '../components/ClientComponent';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E99F7',
    width: '100%',
    height: 100,
    paddingHorizontal: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 28,
    color: 'white',
    textAlign: "center",
    width: '100%'
  },
  button: {
    width: 50,
  },
});

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
     { /**/<Button
        style={styles.button}
        onPress={() => navigation.goBack()}
        title="Back"
     /> }
      <Text style={styles.text}>Pacific 506</Text>
      <View style={styles.button} />
    </SafeAreaView>
  );
};


export default function PostNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E99F7',
          height : 110
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
      <Stack.Screen name="MainContainer" component={HomeTabs} options={{ title: 'Pacific 506'}} />
      <Stack.Screen name="BillContainer" component={Bill} options={{ title: 'Detalle del pedido'}}/> 
    </Stack.Navigator>
  );
}
