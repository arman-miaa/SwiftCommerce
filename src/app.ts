import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes";
import { OrderRoutes } from "./app/modules/orders/order.routes";
import { UserRoutes } from "./app/modules/users/user.routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/users", UserRoutes);

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 SwiftCommerce Server is running....!");
});

export default app;
