import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';
import { getProducts } from '../../domain/usecases/ProductListUseCase';
import Loading from '../components/Loading';
import ListProduct from '../components/Product/ListProduct';

export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => { 
      const resp = await getProducts();
      setProducts(resp);
      setLoading(false);
    })();
  }, [])

  const viewCartFn = () => {
    console.log('shoppingCart')
  };

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Products" icon="cart-outline" isElevated={true} viewFn={viewCartFn} />
      { loading ? (
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

