import { Request, Response } from "express";
import { MAXAGE, MESSAGES } from "../configs/constants.config";
import EmployeeService from "../services/employee.service";
const {
    findByEmail,
    createEmployee
} = new EmployeeService();
const {
    DUPLICATE_EMAIL,
    CREATED
} = MESSAGES.EMPLOYEE;

export default class EmployeeController {
    async createEmployee(req: Request, res: Response) {
        const {email} = req.body;

        //checks if another employee with email exists
        if (await findByEmail(email)) {
            //sends an error if the email exists
            return res.status(409)
            .send({
                success: false,
                message: DUPLICATE_EMAIL
            });
        }
        //creates an employee if the email doesn't exist
        const createdEmployee = await createEmployee(req.body);
        
        return res.status(201)
            .send({
                success: true,
                message: CREATED,
                createdEmployee: createdEmployee
            });
    }
}