import CartRepository from "../repositories/CartRepository";
import { getProductsCart } from "./ProductsCartUseCase";

export async function removeProductsCart(id) {
  try {
    const cart = await getProductsCart();
    const ProductCar = cart.filter((product) => {
      return product.id !== id
    });
    await CartRepository.remove(ProductCar);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};