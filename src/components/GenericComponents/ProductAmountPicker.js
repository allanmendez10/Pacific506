import React, {useState} from 'react'
import { View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import index from '../ClientComponent';
import Icon from 'react-native-vector-icons/FontAwesome'; // 4.4.2

let amount = 0;


const ProductAmountPicker = () => {

    const [amount, setAmount] = useState(0);

const increaseAmount = () => {


    if(amount<10){
        setAmount(amount + 0.5);
    }

}

const decreaseAmount = () => {

    if(amount>0){
        setAmount(amount - 0.5);
    }

}

return (
    <View style={{flexDirection:'row', alignItems: "center"}}>
        <TouchableOpacity style = {styles.touch} onPress={decreaseAmount}>
        <Text style = {styles.decreaseText}> − </Text>
              </TouchableOpacity>
        <Text style = {styles.amoutUnit}>{`${amount} Kg`}</Text>
        <TouchableOpacity style = {styles.touch}  onPress={increaseAmount}>
                <Text style ={styles.increaseText}> + </Text>
              </TouchableOpacity>    
              </View>
)

}

export default ProductAmountPicker

const styles = StyleSheet.create({
    amoutUnit: {
       fontSize: 15,
       marginLeft:18,
       marginRight:10,
       width:45
      },increaseText: {
        backgroundColor: '#0166BF',
        color: 'white',
        fontSize: 20
      },decreaseText: {
        backgroundColor: '#0166BF',
        color: 'white',
        fontSize: 20
      }, touch:{
        borderRadius: 100,
        backgroundColor: '#0166BF',
        padding:5
      }
})
