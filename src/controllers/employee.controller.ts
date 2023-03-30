import { Request, Response } from "express";
import { MESSAGES } from "../configs/constants.config";
import EmployeeService from "../services/employee.service";
import isObjectId from "../utils/isValidObjectId.util";
const {
    findByEmail,
    createEmployee,
    findById
} = new EmployeeService();
const {
    DUPLICATE_EMAIL,
    CREATED,
    NOT_ID,
    INVALID_ID,
    FETCHED
} = MESSAGES.EMPLOYEE;

export default class EmployeeController {
    async createEmployee(req: Request, res: Response) {
        const {companyEmail} = req.body;

        const employee = await findByEmail(companyEmail);
        //checks if another employee with email exists
        if (!employee) {
            //creates an employee if the email doesn't exist
            const createdEmployee = await createEmployee(req.body);
            
            return res.status(201)
                .send({
                    success: true,
                    message: CREATED,
                    createdEmployee: createdEmployee
                });
        }
        //sends an error if the email exists
        return res.status(409)
        .send({
            success: false,
            message: DUPLICATE_EMAIL
        });
        
    }

    async getEmployeeById(req: Request, res: Response) {
        //checks if the Id passed in is a valid Id
        if(!isObjectId(req.params.employeeId)){
            return res.status(404).send({
                success: false,
                message: NOT_ID
            });
        }

        //checks if employee exists
        const employee = await findById(req.params.employeeId);
    
        if (!employee) {
            return res.status(404).send({
                success: false,
                message: INVALID_ID
            });
        }
        return res.status(200).send({
          success: true,
          message: FETCHED,
          returnedUser: employee
        });
    }
}