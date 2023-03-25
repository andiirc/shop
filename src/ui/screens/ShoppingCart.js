import React, { Fragment } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';

export default function ShoppingCart() {
  return (
    <Fragment>
      <StatusBar backgroundColor={"#772ea2"} barStyle="light-content" />
      <AppBar title="Cart" isElevated={true}/>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text> 
            Vista del carrito de compras
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },  

  scrollView: {
    backgroundColor: '#fff',
  },

});