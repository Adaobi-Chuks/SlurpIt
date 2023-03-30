import { Router } from "express";
const router = Router();
import EmployeeController from '../controllers/employee.controller';
// import validate from "../middlewares/validate.middleware";
// import { createSchema } from "../schemas/employee.schema";
const {
    createEmployee,
    getEmployeeById,
    getEmployees
} = new EmployeeController();

//create an employee
router.post("/", createEmployee);
//get an employee with an id
router.get("/:employeeId", getEmployeeById);
//get employees
router.get("/", getEmployees);

export default router;