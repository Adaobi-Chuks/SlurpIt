import CategoryService from "../services/category.service";
import { Request, Response } from "express";
import {MESSAGES} from "../configs/constants.config"
const {
    getCategory,
    addCategory
} = new CategoryService();
const {
    DUPLICATE_NAME,
    CREATED
} = MESSAGES.CATEGORY;

export default class CategoryController {

    //create category
    async addCategory(req: Request, res: Response) {
        const data = req.body;
        //check to see if a category with name exists
        const existingCategory = await getCategory(data.name.toLowerCase());
        //sends an error if the name exists
        if(existingCategory) {
            return res.status(403)
                .send({
                    message: DUPLICATE_NAME,
                    success: false
                });
        }
        //create a category if the name doesn't exist
        const createdCategory = await addCategory(data);
        return res.status(201)
            .send({
                message: CREATED,
                success: true,
                data: createdCategory
            });
    }
}