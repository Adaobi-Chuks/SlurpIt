import IEmployee from "../interfaces/employee.interface";
import Employee from "../models/employee.model";

export default class EmployeeService {

    async findByEmail(email: string) {
        return await Employee.findOne({ email: email, isDeleted: false }, "-__v -password");
    }

    async createEmployee(user: Partial<IEmployee>) {
        const _employee = await Employee.create(user);
        return await Employee.findOne({ _id: _employee.id}, "-__v -password");
    }

}
