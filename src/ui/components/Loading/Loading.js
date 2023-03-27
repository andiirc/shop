import React from 'react'
import { ActivityIndicator, StyleSheet, SafeAreaView, Text } from 'react-native'
import { colors } from '../../styles';

export default function Loading(props) {
  const {text, size, color} = props;

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={size} color={color} style={styles.loading} />
      <Text style={styles.title}>{text}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loading: {
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
  }
});

Loading.defaultProps = {
  text: "Cargando...",
  color: colors.dark,
}