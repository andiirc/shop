import React, { Fragment } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';


export default function Favorites() {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Favorites" icon="cart-outline" isElevated={true}/>
      <SafeAreaView style={layoutStyles.container}>
        <ScrollView>
          <Text> 
            Vista de favoritos 
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}
