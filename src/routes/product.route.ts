import { Router } from "express";
const router = Router();
import ProductController from '../controllers/product.controller';
import authenticate from "../middlewares/auth/authentication.middleware";
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    createProduct,
    getProducts,
    addProduct,
    checkoutProduct
} = new ProductController();

//create an product
router.post("/", authenticate, createProduct);
//get products
router.get("/", authenticate, getProducts);
//add products
router.put("/add", authenticate, addProduct);
//checkout products
router.put("/checkout", authenticate, checkoutProduct);

export default router;