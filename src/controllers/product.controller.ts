import ProductService from "../services/product.service";
import { Request, Response } from "express";
import {MESSAGES} from "../configs/constants.config"
const {
    addProduct,
    getProduct,
    getAllProducts
} = new ProductService();
const {
    DUPLICATE_NAME,
    CREATED, 
    FETCHEDALL, 
    // FETCHED, 
    // DELETED, 
    // INVALID_ID_ERROR
} = MESSAGES.PRODUCT;

export default class ProductController {

    //create product
    async addProduct(req: Request, res: Response) {
        const data = req.body;
        //check to see if a product with name exists
        const existingProduct = await getProduct(data.name.toLowerCase());
        //sends an error if the product exists
        if(existingProduct) {
            return res.status(403)
                .send({
                    message: DUPLICATE_NAME,
                    success: false
                });
        }
        //create a category if the name doesn't exist
        const createdProduct = await addProduct(data);
        return res.status(201)
            .send({
                message: CREATED,
                success: true,
                data: createdProduct
            });
    }

    async getProducts(req: Request, res: Response) {
        const products = await getAllProducts();
        return res.status(200).send({
          success: true,
          message: FETCHEDALL,
          data: products
        });
    }

}