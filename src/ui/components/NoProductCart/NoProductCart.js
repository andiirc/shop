import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../styles';

export default function NoProductCart(props) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No tienes productos...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },  
  text: {
    fontSize: 18,
    color: colors.dark,
    textAlign: 'center',
  }
});