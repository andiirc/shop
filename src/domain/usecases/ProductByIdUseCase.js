import ProductRepository from "../repositories/ProductRepository";

export async function getProductById(id) {
  try {
    const response = await ProductRepository.getById(id);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};