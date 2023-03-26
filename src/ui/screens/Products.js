import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';
import { getProducts } from '../../domain/usecases/ProductListUseCase';
import Loading from '../components/Loading';
import ListProduct from '../components/Product/ListProduct';

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => { 
      setProducts([])
      const resp = await getProducts();
      console.log(resp);
      setProducts(resp)
    })();
  }, [])

  const viewCartFn = () => {
    console.log('shoppingCart')
  };

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Products" icon="cart-outline" isElevated={true} viewFn={viewCartFn} />
      { products.length === 0 ? (
        <Loading size="large"/>
        ): (
          <Fragment>
            <SafeAreaView style={layoutStyles.container}>
              <ScrollView>
                { products && <ListProduct products={products}></ListProduct>}
              </ScrollView>
            </SafeAreaView>
          </Fragment>
        )
      }
    </Fragment>
  )
}

