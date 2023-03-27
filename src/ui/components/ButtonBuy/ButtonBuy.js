import React from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import { AddProductsCart  } from '../../../domain/usecases/ProductsAddCartUseCase';
import { colors } from '../../styles';


export default function ButtonBuy(props) {
  const { product, quantity } = props;

  const ShowToas = (message) => ToastAndroid.show(message, ToastAndroid.SHORT);

  const buy = async () => {
    const resp = await AddProductsCart(product.id, quantity);
    if(resp === true) {
      ShowToas('product added to cart');
    } else{
      ShowToas('error when adding product');
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
  },

  toasContainer: {
    backgroundColor: colors.dark,
    borderRadius: 10,
    padding: 10,
  },

  text: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },

});
