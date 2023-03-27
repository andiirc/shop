import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import { getProductById } from '../../domain/usecases/ProductByIdUseCase';
import StatusBar from '../components/StatusBar';  
import AppBar from '../components/AppBar';
import { colors, layoutStyles } from '../styles';
import Loading from '../components/Loading';
import { Button } from 'react-native-paper';
import InputNumber from '../components/InputNumber';
import ButtonBuy from '../components/ButtonBuy';




export default function DetailProduct(props) {
  const { route } = props;
  const { params } = route;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(()=> {
    (async() => {
      const resp = await getProductById(params.id);
      console.log(resp);
      setProduct(resp);
      setLoading(false);
    })()
  }, [params])

  return (
    <Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <AppBar title="Product" isElevated={true}/>
      { loading ? (
        <Loading size="large"/>
        ): (
          <Fragment>
            <SafeAreaView style={layoutStyles.container}>
              <ScrollView style={styles.container}>
                <Text style={styles.title}> {product.title}</Text>
                <Image style={styles.image} source={{ uri: product.image }} />
                <Text style={styles.descriptionText}> Description: </Text>
                <Text style={styles.descriptionValue}> {product.description}</Text>
                <View style={styles.containerInfo}>
                  <Text style={styles.infoCategory}> Category: {product.category}</Text>  
                  <Text style={styles.infoPrice}> Price:  € {product.price}</Text>
                </View>
                <View style={styles.containerPurchase}>
                  <InputNumber quantity={quantity} setQuantity={setQuantity} ></InputNumber>
                  <ButtonBuy product={product} quantity={quantity}></ButtonBuy>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Fragment>
        )
      }
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    height: 335,
    width: Dimensions.get('window').width,
    resizeMode: "contain",
    marginBottom: 20,
  },
  descriptionText: {
    fontWeight: "bold",
    color: colors.dark,
    margin: 10,
    fontSize: 19,
  },
  descriptionValue: {
    margin: 10,
  },
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoCategory: { 
    width: "60%",
    fontWeight: "bold",
    color: colors.dark,
    margin: 10,
    fontSize: 19,
  },
  infoPrice: {
    width: "40%",
    fontWeight: "bold",
    color: colors.dark,
    fontSize: 19,
    margin: 10,
  }, 
  containerPurchase: {
    margin: 10,
  },
})