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
        <TouchableOpacity onPress={decreaseAmount}>
                <Icon
                  name="chevron-left"
                  icon={{ name: 'rss', type: 'font-awesome' }}
                  style={styles.button}
                  size={25}
                />
              </TouchableOpacity>
        <Text style = {styles.amoutUnit}>{`${amount}Kg`}</Text>
        <TouchableOpacity onPress={increaseAmount}>
                <Icon
                  name="chevron-right"
                  icon={{ name: 'rss', type: 'font-awesome' }}
                  style={styles.button}
                  size={25}
                />
              </TouchableOpacity>    
              </View>
)

}

export default ProductAmountPicker

const styles = StyleSheet.create({
    amoutUnit: {
       fontSize: 15,
       marginLeft:15,
       marginRight:15
      },
})
