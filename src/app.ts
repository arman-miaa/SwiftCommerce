import express from "express";
import cors from "cors"
import { ProductRoutes } from "./app/modules/products/product.routes";
import {  OrderRoutes } from "./app/modules/orders/order.routes";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)

app.get("/", (req, res) => {
  res.send("SwiftCommerce Server is running....!");
});

export default app;