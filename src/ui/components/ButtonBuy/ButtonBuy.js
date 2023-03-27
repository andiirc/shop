import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { AddProductsCart  } from '../../../domain/usecases/ProductsAddCartUseCase';

export default function ButtonBuy(props) {
  const { product, quantity } = props;

  const buy = async () => {
    const resp = await AddProductsCart(product.id, quantity);
    if(resp === true) {
      console.log('producto añadido al carrito');
    } else{
      console.log('error al añadir producto al carrito');
    }
  };

  return (
    <Button style={styles.button} icon="cart" mode="contained" 
      disabled={quantity > 0 ? false : true}
      onPress={() => buy() }>
      Add to cart
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 8
  }
});
