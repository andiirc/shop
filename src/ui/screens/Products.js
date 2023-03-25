import React, { Fragment, useState, useCallback } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';
import { getProducts } from '../../domain/usecases/ProductListUseCase';
import Loading from '../components/Loading';

export default function Products() {

  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => { 
        setProducts([])
        const resp = await getProducts();
        console.log(resp);
        setProducts(resp)
      })();
    }, [])
  );

  const viewCartFn = () => {
    console.log('shoppingCart')
  };

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Product" icon="cart-outline" isElevated={true} viewFn={viewCartFn} />
      { products.length === 0 ? (
        <Loading size="large"/>
        ): (
          <Fragment>
            <SafeAreaView style={layoutStyles.container}>
              <ScrollView>
                <Text> Mis productos </Text>
              </ScrollView>
            </SafeAreaView>
          </Fragment>
        )
      }
    </Fragment>
  )
}

