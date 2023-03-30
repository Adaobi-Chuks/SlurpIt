import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export default class UserService {

    async findByEmail(id: string) {
        return await User.findOne({ employeeId: id, isDeleted: false }, "-__v -password");
    }

    async createUser(user: Partial<IUser>) {
        const _user = await User.create(user);
        return await User.findOne({ _id: _user.id}, "-__v -password");
    }

    async findById(id: string) {
        return await User.findOne({ employeeId: id, isDeleted: false }, "-__v -password");
    }

    async findByIdP(id: string) {
        return await User.findOne({ employeeId: id, isDeleted: false }, "-__v");
    }

    async getAllUsers() {
        let filter: any = {};
        filter.isDeleted = false;
        //sorts in descending order based on the date created
        return await User.find(filter, "-__v -password").sort({ createdAt: 'desc' });
    }
}