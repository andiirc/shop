import React, { Fragment } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';

export default function Favorites() {
  return (
    <Fragment>
      <StatusBar backgroundColor={"#772ea2"} barStyle="light-content" />
      <AppBar title="Favorites" icon="cart-outline" isElevated={true}/>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text> 
            Vista de favoritos 
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
