import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/Products';
import DetailProduct from '../screens/DetailProduct';


const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{}}
    >
      <Stack.Screen
        name="products"
        component={Products}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        component={DetailProduct}
        options={{ 
          headerShown: false, 
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  )
}
