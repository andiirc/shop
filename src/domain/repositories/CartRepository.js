import AsyncStorage from '@react-native-async-storage/async-storage'
import { CART } from '../../utils/constants';

export default {
  
    async get() {
      return await AsyncStorage.getItem(CART);
    },

    async addProduct(product) {
      const item = await AsyncStorage.setItem(CART, JSON.stringify(product));
      return item;
    },

    async remove(product) {
      return await AsyncStorage.setItem(CART, JSON.stringify(product));
    }
  
  };