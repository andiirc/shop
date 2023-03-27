import React, { Fragment } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';

export default function ShoppingCart() {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Cart" isElevated={true}/>
      <SafeAreaView style={layoutStyles.container}>
        <ScrollView>
          <Text> 
            Vista del carrito de compras
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}