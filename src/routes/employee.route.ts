import { Router } from "express";
const router = Router();
import EmployeeController from '../controllers/employee.controller';
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    createEmployee
} = new EmployeeController();

//create an employee
router.post("/", createEmployee);
