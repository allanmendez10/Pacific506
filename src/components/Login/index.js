import React, {useEffect, useState}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/actions/Login';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {showAlert} from '../../utils/alerts'

const LoginComponent  = ({loginP, set}) => {
    const dispatch = useDispatch();
    const navigationP = useNavigation();

    const [isButtonEnable, setButtonState] = useState(true)
    const [isLoading, setButtonLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const validateLogin = (text, isUser = false) =>{

        if(isUser){
          setUser(text)
        }else{
          setPassword(text)
        }

        if(user.length>0 && password.length>0){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
    }

    function  onLogIn(){

        dispatch(login(user,password, (message, isAnError, user = null)=>{
            //console.log("pi");
            if(isAnError){
                showAlert(message);
            }else{
                loginP(true);
                set(user);
                navigationP.navigate("Home");
            }
        }))

    }

    const  signIn = ()=>{

          navigationP.navigate("SignIn",{changeState:loginP, setLogin:set});
 
    }
    


    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Pacific 506</Text>
            <Input keyboardType = "phone-pad" leftIcon={<Icon name='call-outline' size={24} color='black'/>}  value = {user} onChangeText = {(text)=>validateLogin(text, true)} placeholder="Número de telefono"  />
            <Input leftIcon={<Icon name='ios-lock-closed-sharp' size={24} color='black'/>}  value = {password} onChangeText = {(text)=>validateLogin(text)}  placeholder="Contraseña" secureTextEntry={true} />
            <Button loading = {isLoading} disabled = {isButtonEnable}  onPress = {()=>{onLogIn()}} title="Ingresar"/>        
            <View style={{flexDirection:'row', height: 50, marginTop:20, alignContent:"center", alignItems:"center"}}>
            <Text style ={styles.noAccount}>¿No tienes unuenta?</Text>
            <Button   onPress= {signIn} type = "clear" title="Crea una"/>
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
        backgroundColor:'#F3F3F3'
    },
    title: {
        marginBottom: 50,
        width: '100%',
        fontSize:40,
        textAlign:"center"
    },noAccount: {
        fontSize:18,
        textAlign:"left"
    },
})

export default LoginComponent

