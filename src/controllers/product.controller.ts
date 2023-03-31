import ProductService from "../services/product.service";
import { Request, Response } from "express";
import {MESSAGES} from "../configs/constants.config"
import getStatus from "../utils/getStatus";
const {
    addProduct,
    getProduct,
    getAllProducts,
    editById
} = new ProductService();
const {
    DUPLICATE_NAME,
    CREATED, 
    FETCHEDALL, 
    INVALID_NAME,
    ADDED
} = MESSAGES.PRODUCT;

export default class ProductController {

    //create product
    async createProduct(req: Request, res: Response) {
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

    //add product
    async addProduct(req: Request, res: Response) {
        const {name, quantity} = req.body;
        //check to see if a product with name exists
        const existingProduct = await getProduct(name.toLowerCase());
        //sends an error if the product doesn't exist
        if(!existingProduct) {
            return res.status(403)
                .send({
                    message: INVALID_NAME,
                    success: false
                });
        }
        //updates the quantity
        const _quantity= quantity + existingProduct.quantity;

        const date = new Date();
        //adds the quantity to the array for storing history
        const _quantityHistory: number[] = existingProduct.quantityHistory;
        _quantityHistory.push(quantity);

        //finds the mean of stock to check when it'll likely run out
        const sum = _quantityHistory.reduce((acc, curr) => acc + curr, 0);
        const mean = Math.round(sum / 50);
        
        //gets the status
        const _status = getStatus(_quantity);
        const editedData = await editById(name, {
            quantity: _quantity,
            lastSaleDate: date,
            lastSaleQuantity: quantity,
            quantityHistory: _quantityHistory,
            daysToRunOut: mean,
            status: _status
        });
        return res.status(200)
            .send({
                message: ADDED,
                success: true,
                data: editedData
            });
    }

    //checkout product
    async checkoutProduct(req: Request, res: Response) {
        const {name, quantity} = req.body;
        //check to see if a product with name exists
        const existingProduct = await getProduct(name.toLowerCase());
        //sends an error if the product doesn't exist
        if(!existingProduct) {
            return res.status(403)
                .send({
                    message: INVALID_NAME,
                    success: false
                });
        }

        //updates the quantity
        let _quantity;
        _quantity= existingProduct.quantity! - quantity;
        const date = new Date();

        //adds the negative value of quantity to the array for storing history
        const _quantityHistory: number[] = existingProduct.quantityHistory;
        _quantityHistory.push(quantity * -1);

        //gets the status
        const _status = getStatus(_quantity);

        //finds the mean of stock to check when it'll likely run out
        const sum = _quantityHistory.reduce((acc, curr) => acc + curr, 0);
        const mean = Math.round(sum / 50);
        const editedData = await editById(name, {
            quantity: _quantity,
            lastSaleDate: date,
            lastSaleQuantity: quantity,
            quantityHistory: _quantityHistory,
            daysToRunOut: mean,
            status: _status
        });

        return res.status(200)
            .send({
                message: ADDED,
                success: true,
                data: editedData
            });
    }

}