import ProductRepository from "../repositories/ProductRepository";

export async function getProducts() {
  try {
    const paramLimit = 'limit=6';
    const response = await ProductRepository.get(paramLimit);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};