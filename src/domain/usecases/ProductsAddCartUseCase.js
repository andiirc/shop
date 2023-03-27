import CartRepository from "../repositories/CartRepository";
import { getProductsCart } from "./ProductsCartUseCase";

export async function AddProductsCart(id, quantity) {
  try {
    const cart = await getProductsCart();
    if(!cart) throw "error al obtener los datos del carrito";
    if(cart.length === 0) {
      cart.push({ id, quantity});
    } else {
      let exist = false;

      cart.map((product) => {
        if(product.id === id){
          product.quantity += quantity;
          exist = true;
          return product;
        }
      });

      if(!exist) {
        cart.push({id,quantity});
      }
    } 

    await CartRepository.addProduct(cart);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};