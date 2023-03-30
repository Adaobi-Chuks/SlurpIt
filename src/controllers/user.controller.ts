import { Request, Response } from "express";
// import bcrypt from "bcrypt";
import { MAXAGE, MESSAGES } from "../configs/constants.config";
import UserService from "../services/user.service";
import { generateAuthToken } from "../utils/authToken.util";
import { IUserWithId } from "../interfaces/user.interface";
import isObjectId from "../utils/isValidObjectId.util";
const {
    findByEmail,
    createUser,
    // findByUserName,
    // findByUserNameWithP,
    // findById,
    // getAllUsers,
    // editById,
    // deleteById
} = new UserService();
const {
    DUPLICATE_EMAIL,
    CREATED,
    // DUPLICATE_USERNAME,
    // INVALID_USERNAME,
    // INVALID_PASSWORD,
    // INVALID_ID,
    // FETCHED,
    // FETCHEDALL,
    // UPDATED,
    // DELETED,
    // LOGGEDIN,
    // LOGGEDOUT,
    // NOT_ID
} = MESSAGES.USER;

export default class UserController {
    async createUser(req: Request, res: Response) {
        const {employeeId} = req.body;

        //checks if another user with id exists
        if (await findByEmail(employeeId)) {
            //sends an error if the email exists
            return res.status(409)
            .send({
                success: false,
                message: DUPLICATE_EMAIL
            });
        }
        //creates a user if the id doesn't exist
        const createdUser = await createUser(req.body);
        const token = generateAuthToken(createdUser as any);
        res.cookie("token", token, {
            httpOnly: true, 
            maxAge: MAXAGE * 1000 
        });
        return res.status(201)
            .send({
                success: true,
                message: CREATED,
                createdUser: createdUser
            });
    }
}