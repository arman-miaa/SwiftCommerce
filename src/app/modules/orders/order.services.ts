import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createANewOrder = async (orderData: TOrder) => {
    console.log('order data in service',orderData);
    const result = await OrderModel.create(orderData);
    return result;
};

const getAllOrdersFromDB = async (query: string | undefined) => {
  const filter = query ? { email: query } : {};
  return await OrderModel.find(filter);
};
export const OrderServices = {
  createANewOrder,
  getAllOrdersFromDB,
};
