import { NextFunction, Request, Response } from "express";
import AuthRequest from "../../interfaces/auth.interface";
import {MESSAGES, ENUM} from "../../configs/constants.config";

export default function authorizeAdmin(req: Request, res: Response, next: NextFunction){
    if ((req as AuthRequest).user.role !== ENUM.ADMIN) {
        return res.status(403)
            .send({
                success: false, 
                message: MESSAGES.AUTH.DENIED
            })
    }
    next();
}