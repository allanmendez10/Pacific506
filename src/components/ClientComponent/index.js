import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Text,SafeAreaView, StyleSheet} from 'react-native';

import ClientInformation from '../ClientComponent/clientInformation'
import Login from '../Login'
import {getStringData} from '../../services/storage'

export default function index() {


  const [user, setUser] = useState(null);
  const [isLogin, setLogin] = useState(true);

 
  useEffect(() => {
    console.log("useEffect");
  //  setTimeout(() => {
      getStringData('user').then((value)=>{
        console.log("index", value);
        setUser(value);
    })
    //}, 1000);
   
  }, []);

  return (
    
    <SafeAreaView style= {styles.container}>
      {((isLogin && user))?  (
      <ClientInformation login = {setLogin} user = {user} set= {setUser}/>
      ):(
        <Login set = {setUser} loginP = {setLogin}/>
      )}

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 10,
    },
})