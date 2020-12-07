import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'
import { Input, Button} from 'react-native-elements';
import axios from 'axios'
import {setIsLoggedRedux, setUserLoggedRedux} from '../../store/actions/Login';
import {showAlert} from '../../utils/alerts'
import { useNavigation } from '@react-navigation/native';
import {API_URL} from "@env";
import {storeObjectData} from '../../services/storage'

export default function SignInComponent({route, navigation}) {
    
    const { isLogin, changeState, setLogin} = route.params;
    const navigationP = useNavigation()
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [btnEnable, setButtonState] = useState(true)
    const [processingRequest, setRequestState] = useState(false)

    const user = {
        name:name,
        lastname:lastname,
        password: password,
        phone: phone}

    const signIn = async()=>{

        setRequestState(true);

        const response = await axios.post(
            `${API_URL}/client/register`,{
                user:user
            }
          );
          setRequestState(false);

          if(response.data.isSuccessFull){
             
              storeObjectData('user',response.data.data);
              changeState(true);
              setLogin(response.data.data);
              navigation.navigate("Home");
              //navigation.goBack(null);

          }else{
            console.log("else");
            setRequestState(false);
            showAlert(`${response.data.message}`);
          }
    
    }

    const changeText = (text)=>{

        if( text.length ==0 || name.length==0 || lastname.length==0  || phone.length==0 || password.length==0){
            setButtonState(true)
        }else            
            setButtonState(false)

    }

    return (
        <SafeAreaView style={styles.container}>

            { !processingRequest ?  (
                <>
      <Input  value = {name} onChangeText = {(text)=> { setName(text); changeText(text)} } placeholder="Nombre"  />
      <Input  value = {lastname} onChangeText = {(text)=> {setLastname(text); changeText(text)}} placeholder="Apellido"  />
      <Input keyboardType = "phone-pad"  value = {phone} onChangeText = {(text)=> {setPhone(text); changeText(text)}} placeholder="Número de télefono"  />
      <Input  secureTextEntry={true} value = {password} onChangeText = {(text)=> {setPassword(text); changeText(text)}} placeholder="Contraseña"  />
      <Button disabled = {btnEnable} onPress = {signIn} title="Registrar"/>
           </>
            ):(
                <>
                <ActivityIndicator
          color="blue"
          size="large"
          style={styles.activityIndicator}
        />
        </>
            ) } 
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin:15,
        backgroundColor:'#F3F3F3'
    },
    textfields: {
        marginBottom: 50,
        width: '100%',
        fontSize:40,
        textAlign:"center"
    },activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
      },
      error:{
          padding:30
      },
      title:{
        padding:30
    },
})
