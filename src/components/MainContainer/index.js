import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/Products';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import ProductComponet from '../ProductComponent';

const MainContainer = () => {
  const dispatch = useDispatch();

  const reduxProducts = useSelector((state) => state.products.products);
  const reduxLoaded = useSelector((state) => state.products.loaded);
  const navigation = useNavigation();

  const amount = 0;

  // Simulando el componentDidMount
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts, dispatch]);

  const goToBill = () => {

    navigation.navigate('BillContainer');

  }

  return (
    <SafeAreaView style={styles.container}>
      {reduxLoaded ? (
        <>
          <ScrollView>
            {reduxProducts.map((product) => (
              <ProductComponet
                key={product.id}
                product={JSON.parse(product.products)}
              />
            ))}
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
          }>{`Agregar al carrito. ₡ ${amount}`}</Text>
        </TouchableOpacity> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  footer: {
    width: '100%',
    backgroundColor: '#2E99F7',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

export default MainContainer;
