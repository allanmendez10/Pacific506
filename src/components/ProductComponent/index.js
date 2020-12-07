import React, {useEffect} from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import GenericComponent from '../GenericComponents/ProductAmountPicker';



const ProductComponet = ({product}) => {
  
  return (
    <View style={styles.container}>
        {/*<Image source={require('../../resources/img/ic_pacific506.jpg')} style = {styles.image}/> */}
       
      <Text style={styles.textFields}>{`${product.products.name}`}</Text>
      <Text style={styles.textFields}>₡{product.products.price} x Kg</Text> 
      
      <GenericComponent product ={product} />

    </View>
  );
};

export default ProductComponet;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    backgroundColor: '#fafafa',
    marginBottom: 20,
    padding:15,
    marginLeft: 20,
    marginRight: 20,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    height: '30%',
    marginBottom: 15,
  }
});
