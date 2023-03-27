import CartRepository from "../repositories/CartRepository";

export async function getProductsCart() {
  try {
    const cart = await CartRepository.get();
    if(!cart) return [];
    return JSON.parse(cart);
  } catch (error) {
    console.log(error);
    return error;
  }
};