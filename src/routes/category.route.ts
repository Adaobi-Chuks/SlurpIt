import { Router } from "express";
const router = Router();
import CategoryController from '../controllers/category.controller';
import authenticate from "../middlewares/auth/authentication.middleware";
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    addCategory
} = new CategoryController();

//create an category
router.post("/", addCategory);

export default router;