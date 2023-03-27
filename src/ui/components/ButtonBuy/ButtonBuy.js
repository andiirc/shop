import React from 'react';
import { StyleSheet } from 'react-native';
import { Button} from 'react-native-paper';

export default function InputNumber(props) {
  const { product, quantity } = props;
  console.log(`total es ${product.price} ${quantity}`);

  const buy = () => console.log(product.price * quantity);

  return (
    <Button style={styles.button} icon="cart" mode="contained" onPress={() => buy() }>
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
