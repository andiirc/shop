import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, View, Text, Image } from 'react-native';
import { colors } from '../../styles';

export default function ListProduct(props) {
  const { products } = props;

  return (
    <View style={styles.container}>
      { products.map((product) => (
          <TouchableWithoutFeedback key={product.id} onPress={()=> console.log('ir al detalle')}>
          <View style={styles.containerProduct}>
            <View style={styles.product}>
              <Image style={styles.image} source={{ uri: product.image }} />
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail"> 
                {product.title} 
              </Text>
              <Text> {product.category}</Text>
              <Text> {product.price}</Text>
            </View>
        </View>
          </TouchableWithoutFeedback>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    margin: 2,
  },  
  containerProduct: {
    width: "50%",
    padding: 4,
  },
  product: {
    backgroundColor: colors.bgLight,
    padding:10,
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    height: 150,
    resizeMode: "contain"
  },
  name: {
    marginTop: 15,
    fontSize: 18,
  },
});


// import { Card } from 'react-native-paper'; 
// <Card style={styles.product}>
//     <Card.Content>
//       <Image style={styles.image} source={{ uri: product.image }} />
//       <Text variant="titleLarge">{product.title}</Text>
//       <Text variant="bodyMedium">{product.category}</Text>
//       <Text variant="bodyMedium">{product.price}</Text>
//     </Card.Content>
// </Card>