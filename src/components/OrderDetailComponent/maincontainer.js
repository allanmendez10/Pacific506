import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function index({ detail}) {
    

    return (
        
        <View style={{flexDirection:'row',  margin:30, justifyContent:"space-between"}}>
        
          <Text style ={styles.text}>{detail.name}</Text>
          <Text style ={styles.text}>{`${detail.amount} kg`}</Text>
          <Text style ={styles.text}>{`₡ ${detail.price}`}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    text:{
        marginRight:20,
        fontSize:17,
    },
})
