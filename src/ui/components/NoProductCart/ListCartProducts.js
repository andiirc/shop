import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getProductById } from '../../../domain/usecases/ProductByIdUseCase';
import Loading from '../../components/Loading';
import Product  from './Product'

export default function ListCartProducts(props) {
  
  const { cart, products, setProducts, setLoadCart } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
        const infoProducts = [];
        for await (const product of cart){
          const resp = await getProductById(product.id);
          resp.quantity = product.quantity;
          infoProducts.push(resp);
        } 
        setProducts(infoProducts);
        setLoading(false);
    })()
  }, [cart]);

  return (
    <View>
      <Text style={style.title}> Products: </Text>
      { loading ? (
        <Loading size="large"/>
        ): (
          <Fragment>
            {
              products.map((product) => (
                <Product 
                  product={product} 
                  key={product.id}  
                  setLoadCart={setLoadCart}
                />
              ))
            }
          </Fragment>
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});