import React, {useState} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {setProductAmount} from '../../store/actions/Car'


const ProductAmountPicker = ({product}) => {

    console.log(product);


    const totalAmount = useSelector((state) => state.car.amount);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(product.amount);
    const halfKG = 0.5;

    const changeAmount = (isIncreasing, productP) => {

      console.log(isIncreasing);
      console.log(productP.amount);
      console.log(amount);

      
       if(isIncreasing && amount<10){
        productP.amount = productP.amount + 0.5;
         //setAmount(amount+0.5);
         let total = 0;
         if(productP.amount==0){
           total = productP.price*halfKG + totalAmount;
         }else{
          total = productP.price*(productP.amount+halfKG);
         }
         dispatch(setProductAmount(total))
       }else if(productP.amount>0  && !isIncreasing){
       // console.log(amount);
        productP.amount = productP.amount - 0.5;
     //   setAmount(amount-0.5);
        dispatch(setProductAmount(productP.price*(productP.amount==0?halfKG:(productP.amount-halfKG))))
       }

        
    }


return (
    <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center", alignContent: "center", marginTop:10}}>
     <Icon onPress = { ()=>{changeAmount(false, product)}} name="remove-circle-outline" color={"black"} size={36} />   
      <Text style ={styles.text}>{`${product.amount} Kg`}</Text>
      <Icon onPress = { ()=>{changeAmount(true, product)}} name="add-circle-outline" color={"black"} size={36} />   
    
    </View>
)

}

export default ProductAmountPicker

const styles = StyleSheet.create({
    textInput:{
        height: 40, 
         width : 100, 
         borderWidth: 1 , 
         padding: 5,
         textAlign: "right",
         fontSize : 17
      },
      text:{
        marginLeft:10,
        marginRight:10,
        fontSize: 15
      },decimal:{
        fontSize: 17,
        marginLeft: 3
      }
})
