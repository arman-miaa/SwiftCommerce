import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
}

const getProductsFromDB = async () => {
    const data = await Product.find();
    return data;
}

export const ProductServices = {
    createProductIntoDB,
    getProductsFromDB
}