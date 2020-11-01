import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
 
import GenericComponent from '../GenericComponents/ProductAmountPicker';

const ProductComponet = ({product}) => {
  //console.log(product);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Image source={{uri: product.image}} style = {styles.image}/>
       
        <View style={{flexDirection:'row', height: 50, justifyContent: "space-between", marginLeft:10, marginRight:10 }}>

    
    <View>
        <Text style={styles.textFields}>{product.name}</Text>
        <Text style={styles.textFields}>₡{product.price} x Kg</Text>

        </View>
       
  <GenericComponent/>

        </View>
      
      </View>
    </View>
  );
};

export default ProductComponet;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 30,
    backgroundColor: '#fafafa',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textFields: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 2,
    width: '100%',
    fontSize: 17,
  },
  image: {
    width: '100%',
    height: '75%',
    marginBottom: 15,
  }
});
