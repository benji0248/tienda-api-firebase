import express from "express";
import productController from "../controllers/productController.js";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();

router.use(authenticateToken);

router.get("/", productController.getAllProducts.bind(productController));

router.get("/:id", productController.getProductById.bind(productController));

router.post("/create", productController.createProduct.bind(productController));

router.put("/:id", productController.updateProduct.bind(productController));

router.delete("/:id", productController.deleteProduct.bind(productController));

export default router;
