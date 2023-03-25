import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';
import Products from '../screens/Products';
import Favorites from '../screens/Favorites';
import ShoppingCart from '../screens/ShoppingCart';

const HomeRoute = () => <Products></Products>

const FavoritesRoute = () => <Favorites></Favorites>

const ShoppingCartRoute = () => <ShoppingCart></ShoppingCart>

export default function AppNavigation() {

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Products', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'favorites', title: 'Favorites', focusedIcon: 'hand-heart' },
    { key: 'shoppingCart', title: 'Cart', focusedIcon: 'cart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    favorites: FavoritesRoute,
    shoppingCart: ShoppingCartRoute,
  });


  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </NavigationContainer>
  )
}