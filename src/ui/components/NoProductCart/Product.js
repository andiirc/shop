import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View  } from 'react-native';
import { Chip } from 'react-native-paper';
import { colors } from '../../styles';
import InputNumber from '../InputNumber';


export default function Product(props) {
  const { product } = props;

  const [quantity, setQuantity] = useState(0);

  useEffect(() =>{
    (() => totalQuantity())()
  },[])

  const totalQuantity = () => {
      setQuantity(product.quantity);
  }


  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: product.image }}/>
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail"> { product.title  } </Text>
        </View>
        <View style={styles.price} >
          <Text style={styles.currentPrice}> 
            € { product.price * quantity } 
          </Text>
          <View style={styles.btnDelete} >
            <Chip icon="delete-forever" closeIcon={true} onPress={() => console.log('elimina producto')}>
              Delete
            </Chip>
          </View>
        </View>
        <View style={styles.btnContainer} >
          <Text style={styles.quantity}> 
            <InputNumber quantity={quantity} setQuantity={setQuantity} ></InputNumber>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.bgLight,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 10,
  },

  containerImage: {
    width: "40%",
    height: 170,
    backgroundColor: colors.primary,
    padding: 5,
  },

  image: {
    height: "100%",
    resizeMode: "contain",
  },

  info: {
    padding: 10,
    width: "60%",
  },

  name: {
    fontSize: 16,
  },
  
  price: {
    flexDirection: "row",
    marginTop: 5,
  },

  currentPrice: {
    fontSize: 18,
    color: colors.dark,
  },

  btnDelete: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-end',
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginTop: 20,
  }
})