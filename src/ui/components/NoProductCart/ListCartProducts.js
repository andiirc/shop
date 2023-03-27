import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getProductById } from '../../../domain/usecases/ProductByIdUseCase';
import Loading from '../../components/Loading';
import Product  from './Product'
import { FAB } from 'react-native-paper';
import { colors } from '../../styles';


export default function ListCartProducts(props) {
  
  const { cart, products, setProducts, setLoadCart, setTotalPayment, totalPayment } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
        const infoProducts = [];
        let totalPayment = 0;

        for await (const product of cart){
          const resp = await getProductById(product.id);
          resp.quantity = product.quantity;
          infoProducts.push(resp);
          totalPayment += resp.price * resp.quantity
        }
        setProducts(infoProducts);
        setTotalPayment(totalPayment);
        setLoading(false);
    })()
  }, [cart]);

  return (
    <View>
      { loading ? (
        <Loading size="large"/>
        ): (
          <Fragment>
          <Text style={style.total}> Total: €  {totalPayment || 0 }</Text>
            {
              products.map((product) => (
                <Product 
                  product={product} 
                  key={product.id}  
                  setLoadCart={setLoadCart}
                />
              ))
            }
            <FAB style={style.fab} 
              icon="credit-card-outline"
              label={totalPayment && `Payment ${totalPayment} €`}  
              onPress={() => console.log('Pagar')}          
            />
          </Fragment>
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  fab: {
    backgroundColor: colors.dark,
    color: colors.bgLight,
    margin: 20,
    right: 0,
    bottom: 0,
  },

});