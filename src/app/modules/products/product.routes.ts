import express from "express";
import { ProductControllers } from "./product.controller";
import { verifyToken } from "../../middleware/authMiddleware";
const router = express.Router();


router.get("/",ProductControllers.getAllProducts)
router.post("/", ProductControllers.createProduct)
router.get("/:productId",verifyToken, ProductControllers.getSingleProduct)
router.put("/:productId", ProductControllers.updateProduct)
router.delete("/:productId", ProductControllers.deleteProduct)


export const ProductRoutes = router;