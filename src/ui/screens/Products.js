import React, { Fragment, useState, useCallback } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import colors from '../styles/colors';
import { getProducts } from '../../domain/usecases/ProductListUseCase';

export default function Products() {

  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => { 
        const resp = await getProducts();
        setProducts(resp)
      })();
    }, [])
  );

  const viewCartFn = () => {
    console.log('shoppingCart')
    console.log(products)
  };

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Product" icon="cart-outline" isElevated={true} viewFn={viewCartFn} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text> 
            Vista de productos
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },  

  scrollView: {
    backgroundColor: '#fff',
  },

});

