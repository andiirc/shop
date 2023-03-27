import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingCart from '../screens/ShoppingCart';
import { StyleSheet } from 'react-native';
import ProductStack from './ProductStack';
import { colors } from '../styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {

  
  return (
    <NavigationContainer>
      <Tab.Navigator  
        screenOptions={{  
          headerShown: false,
          tabBarActiveBackgroundColor: colors.primary,
          tabBarActiveTintColor: colors.dark,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen name="Home" component={ProductStack} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MIcon name="home" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen name="Cart" component={ShoppingCart} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MIcon name="cart" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}




