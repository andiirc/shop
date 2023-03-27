import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

export default function InputNumber(props) {
  const {quantity, setQuantity} = props
  // const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card style={styles.container}>
      <View style={styles.numberContainer}>
        <Button icon="minus" onPress={handleDecrement}>
        </Button>
          <Title>{quantity}</Title>
        <Button icon="plus" onPress={handleIncrement}>
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
