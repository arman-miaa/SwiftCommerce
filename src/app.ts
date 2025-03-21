import express from "express";
import cors from "cors"
import { ProductRoutes } from "./app/modules/products/product.routes";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.use('/api/products', ProductRoutes)

app.get("/", (req, res) => {
  res.send("SwiftCommerce Server is running....!");
});

export default app;