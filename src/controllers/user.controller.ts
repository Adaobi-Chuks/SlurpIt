import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { MAXAGE, MESSAGES } from "../configs/constants.config";
import UserService from "../services/user.service";
import { generateAuthToken } from "../utils/authToken.util";
import { IUserWithId } from "../interfaces/user.interface";
import isObjectId from "../utils/isValidObjectId.util";
const {
    findByEmail,
    createUser,
    findById,
    getAllUsers,
    findByIdP,
    // findByUserName,
    // findByUserNameWithP,
    // editById,
    // deleteById
} = new UserService();
const {
    DUPLICATE_EMAIL,
    CREATED,
    NOT_ID,
    INVALID_ID,
    FETCHED,
    FETCHEDALL,
    LOGGEDOUT,
    INVALID_PASSWORD,
    LOGGEDIN,
    // DUPLICATE_USERNAME,
    // INVALID_USERNAME,
    // UPDATED,
    // DELETED,
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

    async getUserById(req: Request, res: Response) {
        //checks if the Id passed in is a valid Id
        if(!isObjectId(req.params.userId)){
            return res.status(404).send({
                success: false,
                message: NOT_ID
            });
        }

        //checks if user exists
        const user = await findById(req.params.userId);
    
        if (!user) {
            return res.status(404).send({
                success: false,
                message: INVALID_ID
            });
        }
        return res.status(200).send({
          success: true,
          message: FETCHED,
          returnedUser: user
        });
    }

    async getUsers(req: Request, res: Response) {
        const users = await getAllUsers();
        return res.status(200).send({
          success: true,
          message: FETCHEDALL,
          returnedUsers: users
        });
    }

    async login(req: Request, res: Response) {
        const {employeeId, password} = req.body;
        //checks if the Id passed in is a valid Id
        if(!isObjectId(employeeId)){
            return res.status(404).send({
                success: false,
                message: NOT_ID
            });
        }
        const _user = await findByIdP(employeeId);
        if (!_user) {
            return res.status(400)
                .send({ 
                    success: false,
                    message: MESSAGES.EMPLOYEE.INVALID_ID
                });
        }

        const validPassword = await bcrypt.compare(password, _user.password);
        if (!validPassword) {
            return res.status(400)
                .send({ 
                    success: false, 
                    message: INVALID_PASSWORD
                });
        }
        const token = generateAuthToken(_user as unknown as IUserWithId);
        res.cookie("token", token, { 
            httpOnly: true, 
            maxAge: MAXAGE * 1000
        });
        return res.status(200).send({
            success: true,
            message: LOGGEDIN,
            user: _user 
        });
    }

    async logout(req: Request, res: Response) {
        res.cookie("token", '', {
            httpOnly: true, maxAge: 1 
        });
        return res.status(200).send({
            success: true,
            message: LOGGEDOUT
        });
    }

}