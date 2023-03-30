import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export default class UserService {

    async findByEmail(email: string) {
        return await User.findOne({ email: email, isDeleted: false }, "-__v -password");
    }

    async createUser(user: Partial<IUser>) {
        const _user = await User.create(user);
        return await User.findOne({ _id: _user.id}, "-__v -password");
    }
}