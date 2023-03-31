import { Router } from "express";
const router = Router();
import ProductController from '../controllers/product.controller';
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    createProduct,
    getProducts,
    addProduct,
    checkoutProduct
} = new ProductController();

//create an product
router.post("/", createProduct);
//get products
router.get("/", getProducts);
//add products
router.put("/add", addProduct);
//checkout products
router.put("/checkout", checkoutProduct);

export default router;