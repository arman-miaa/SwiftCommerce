import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductsFromDB = async (searchTerm = "") => {
    const query = searchTerm ? {name: {$regex: searchTerm, $options: "i"}} : {}
  const data = await Product.find(query);
  return data;
};

const getSingleProductFromDB = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}

export const ProductServices = {
  createProductIntoDB,
    getProductsFromDB,
  getSingleProductFromDB,
};
