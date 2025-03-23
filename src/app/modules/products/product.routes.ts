import express from "express";
import { ProductControllers } from "./product.controller";
import { verifyToken } from "../../middleware/authMiddleware";
import { isAdmin } from "../../middleware/adminMiddlweare";
const router = express.Router();


router.get("/", ProductControllers.getAllProducts)
router.post("/", verifyToken,isAdmin, ProductControllers.createProduct)
router.get("/:productId",verifyToken, isAdmin, ProductControllers.getSingleProduct)
router.put("/:productId", verifyToken,isAdmin, ProductControllers.updateProduct)
router.delete("/:productId", verifyToken, isAdmin, ProductControllers.deleteProduct)


export const ProductRoutes = router;