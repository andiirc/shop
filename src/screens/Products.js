import React, { Fragment } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import colors from '../styles/colors';

export default function Products() {

  const viewCartFn = () => {
    console.log('shoppingCart')
  };

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Product" icon="cart-outline" isElevated={true} viewFn={viewCartFn} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text> 
            Vista de productos 
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

