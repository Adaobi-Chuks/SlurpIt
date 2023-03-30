import { Router } from "express";
const router = Router();
import UserController from '../controllers/user.controller';
// import authenticate from "../middlewares/auth/authentication.middleware";
// import authorize from "../middlewares/auth/authorization.middleware";
// import validate from "../middlewares/validate.middleware";
// import { createSchema, editSchema, loginSchema } from "../schemas/user.schema";
const {
    createUser,
    getUserById,
    getUsers,
    login,
    logout
} = new UserController();

//create a user or signup
router.post("/", createUser);
//get a user with an id
router.get("/:userId", getUserById);
//get users
router.get("/", getUsers);
//create a user or signup
router.post("/login", login);
//logs out a user
router.post("/logout", logout);

export default router;