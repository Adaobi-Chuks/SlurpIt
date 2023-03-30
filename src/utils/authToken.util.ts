import IUser, { IUserWithId } from "../interfaces/user.interface";
import jwt from "jsonwebtoken";
import { MAXAGE, SECRET } from "../configs/constants.config";

//creates a json web token
export const generateAuthToken = (user: IUserWithId) => {
    return jwt.sign({
        employeeId: user.employeeId,
        role: user.role
    }, SECRET, {
        expiresIn: MAXAGE
    });
};