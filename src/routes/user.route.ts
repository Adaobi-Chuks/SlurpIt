import { Router } from "express";
const router = Router();
import UserController from '../controllers/user.controller';
// import authenticate from "../middlewares/auth/authentication.middleware";
// import authorize from "../middlewares/auth/authorization.middleware";
// import validate from "../middlewares/validate.middleware";
// import { createSchema, editSchema, loginSchema } from "../schemas/user.schema";
const {
    createUser,
    // getUserByHandle,
    // getUserById,
    // getUsers,
    // editUserById,
    // deleteById,
    // login,
    // logout
} = new UserController();

//create a user or signup
router.post("/", createUser);

export default router;