import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button} from 'react-native-elements'
import {removeItem} from '../../services/storage'
import {useNavigation} from '@react-navigation/native';

const clientInformation = ({user, login, set}) => {
   // console.log("clientInformation",user);
    const navigation = useNavigation();


   async function logOut(){

        console.log("logOut");
        await removeItem('user');
        navigation.navigate("Home");
        login(false);
        set(null);

    }

    return (
        <View style={styles.container}>
            <Text style ={styles.title} h1>Perfil</Text>
            <Text style= {styles.text}>{user.name}</Text>
            <Text style= {styles.text}>{user.lastname}</Text>
            <Text style= {styles.text}>{user.phone}</Text> 
            <Button style = {styles.button} onPress = {()=>{logOut()}} title="Cerrar Sesión"/>

        </View>
    )
}

export default clientInformation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
      }, 
      text:{
          marginBottom:20,
          marginLeft:25,
          fontSize:20,
          
      },
      title:{
        marginBottom:20,
        marginLeft:10,
        fontSize:20,
        
    },
    button:{
        marginBottom:20,
        marginLeft:10,
        fontSize:20,
        width:"50%",
        textAlign:"center",
        alignContent:"center",
        alignItems:"center"        
    }
})
