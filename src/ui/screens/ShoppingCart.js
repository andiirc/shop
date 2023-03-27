import React, { Fragment, useState, useCallback} from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';
import { getProductsCart } from '../../domain/usecases/ProductsCartUseCase';
import { useFocusEffect } from '@react-navigation/native';
import { NoProductCart, ListCartProducts } from '../components/NoProductCart';

export default function ShoppingCart() {

  const [cart, setCart] = useState(null);

  const [products, setProducts] = useState(null);

  useFocusEffect(
    useCallback(()=> {
      getCart();
    },[])
  )

const getCart = async () => {
  const resp = await getProductsCart();
  setCart(resp);
}

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Cart" isElevated={true}/>
        {
          !cart || cart.length === 0 ? (<NoProductCart/>) : (
            <SafeAreaView style={layoutStyles.container}>
              <ScrollView>
                <ListCartProducts 
                  cart={cart} 
                  products={products} 
                  setProducts={setProducts}
                /> 
              </ScrollView>
            </SafeAreaView>
          )
        }
    </Fragment>
  )
}