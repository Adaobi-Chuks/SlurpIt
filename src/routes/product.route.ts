import { Router } from "express";
const router = Router();
import ProductController from '../controllers/product.controller';
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    addProduct,
    getProducts
} = new ProductController();

//create an category
router.post("/", addProduct);
//get employees
router.get("/", getProducts);

export default router;