import IEmployee from "../interfaces/employee.interface";
import Employee from "../models/employee.model";

export default class EmployeeService {

    async findByEmail(email: string) {
        return await Employee.findOne({ companyEmail: email, isDeleted: false }, "-__v -password");
    }

    async createEmployee(employee: Partial<IEmployee>) {
        const _employee = await Employee.create(employee);
        return await Employee.findOne({ _id: _employee.id}, "-__v -password");
    }

    async findById(id: string) {
        return await Employee.findOne({ _id: id, isDeleted: false }, "-__v -password");
    }

    async getAllEmployees() {
        let filter: any = {};
        filter.isDeleted = false;
        //sorts in descending order based on the date created
        return await Employee.find(filter, "-__v -password").sort({ createdAt: 'desc' });
    }

}
