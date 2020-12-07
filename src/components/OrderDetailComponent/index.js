import React, {useState, useEffect} from 'react'

import {useDispatch} from 'react-redux'
import {showAlert,showAlertCallback} from  '../../utils/alerts'
import {getStringData} from '../../services/storage'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, SafeAreaView} from 'react-native'
import OrderDetail from '../OrderDetailComponent/maincontainer'
import {setProductAmount} from '../../store/actions/Car'

export default function index({ route, navigation }) {
    
    const { orderDetail, total, restart} = route.params;

    const [user, setUser] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        getStringData('user').then((value)=>{
          console.log("order",value);
        setUser(value);
      })
     
    },[]);
    

    const makeOrder = ()=>{

      if(user!=null){      
        showAlertCallback("Pedido realizado con éxito.", ()=>{
          restart();
          navigation.goBack(null);
          })       
      }else{
        showAlertCallback("Para realizar el pedido necesita iniciar sesión.", ()=>{
        navigation.navigate('Profile',{})
        })
      }
    }

    const callOrderMethod = async()=>{
      var today = new Date();

      setRequestState(true);
      const response = await axios.post(
          `${API_URL}/client/register`,{
              data:{client_id:user.id, bill_detail: data},
              date: `${today.getDate()}/${parseInt(today.getMonth()+1)}/${today.getFullYear()}`
          }
        );
        setRequestState(false);

        if(response.data.isSuccessFull){
          dispatch(setIsLoggedRedux(true));
          dispatch(setUserLoggedRedux(response.data.data));

        }else{
          showAlert(`${response.data.message}`)
          setRequestState(false);
        }

  
  }

    return (
        
        <SafeAreaView style ={styles.container} >
        
        <ScrollView >
            {orderDetail.map((detailP) => (
              <OrderDetail
                key={0}
                detail={detailP}
              />
            ))}
          </ScrollView>

          <TouchableOpacity onPress = {makeOrder} style={styles.footer}>
        <Text
          style={
            styles.footerText
          }>{`Realizar pedido. ₡ ${total}`}</Text>
        </TouchableOpacity> 

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    footer: {
        width: '100%',
        backgroundColor: 'green',
        padding: 20,
        alignItems: 'center',
      },
      footerText: {
        color: 'white',
        fontSize: 18,
      },
})
