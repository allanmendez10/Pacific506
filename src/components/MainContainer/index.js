import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts, setCurrentProductRedux} from '../../store/actions/Products';
import {useNavigation} from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

import {
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import ProductComponet from '../ProductComponent';

const MainContainer = () => {
  //console.log("cambio")
  const dispatch = useDispatch();

  const reduxProducts = useSelector((state) => state.products.products);
  const reduxLoaded = useSelector((state) => state.products.loaded);
  const amount = useSelector((state) => state.car.amount);
  const [search,setSearch] = useState("");
  const [productsResult,setProductsResult] = useState([]);

  const navigation = useNavigation();

  let total = 0;
  let totalBill = [];
  //let productsResult = [];


  // Simulando el componentDidMount
  useEffect(() => {
    //console.log("useEffet");
    dispatch(getProducts());
  }, [getProducts, dispatch]);

  useEffect(() => {
    //console.log("useEffet");
  }, [productsResult]);

  const goToBill = () => {

   // navigation.navigate('OrderDetailContainer');

    navigation.navigate('OrderDetailContainer', {
      orderDetail: totalBill,
      total:total,
      restart:reestartProductList
    }); 

  }

  const reestartProductList = () =>{
   // reduxProducts.clear();
    setProductsResult([]);
    dispatch(getProducts());
  }


  const changeTotal = ()=>{
   
    reduxProducts.map((product)=>{


     if(product.amount>0){
        totalBill.push({name:product.products.name,price:product.products.price, amount:product.amount})
     } 

     total= total + product.amount* product.products.price
    
    })

  }


  async function updateSearch (text){
  
    //console.log(text);
    setSearch(text);

    setProductsResult([]);
   // setTimeout(() => {
      searchProducts(text);
   // }, 500);

  }

  const searchProducts = (letter)=>{
   

    let flag = false;
    let array = [];

    reduxProducts.map((product)=>{


     if((product.products.name.includes(letter) || product.products.price.toString().includes(letter)) && letter.length>0){
       array.push(product)
       flag = true;
     } 
    
    })

    if(flag)
      setProductsResult(array);
      
   // console.log("pelada",productsResult);

   //dispatch(setCurrentProductRedux(productsResult));

  }

  

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar por nombre y precio"
        onChangeText={(text)=>{updateSearch(text)}}
        value = {search}
      />

      {reduxLoaded ? (   
        <> 
          <ScrollView style = {styles.scrollView}>
            {changeTotal()}
            {console.log("cambio", productsResult.length )}
            {productsResult.length ==0 ? 
            (reduxProducts.map((productP) => (
              <ProductComponet
                key={productP.id}
                product={productP}
              />
            ))):(productsResult.map((productP) => (
              <ProductComponet
                key={productP.id}
                product={productP}
              />
            )))}
          </ScrollView>
        </>
      ) : (
        <ActivityIndicator
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
      )}
      <TouchableOpacity onPress = {goToBill} style={styles.footer}>
        <Text
          style={
            styles.footerText
          }>{`Agregar al carrito. ₡ ${total}`}</Text>
        </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    width: '100%',
    backgroundColor: '#2E99F7',
    padding: 20,
    alignItems: 'center',
    marginBottom: 3
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default MainContainer;
