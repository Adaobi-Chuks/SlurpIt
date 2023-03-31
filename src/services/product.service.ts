import IProduct from "../interfaces/product.interface";
import Product from "../models/product.model";

export default class ProductService {

    async addProduct(product: Partial<IProduct>) {
        const _product = await Product.create(product);
        return await Product.findOne({ name: _product.name}, "-__v");
    }

    async getProduct(name: string) {
        return await Product.findOne({ name: name, isDeleted: false }, "-__v");
    }
    
    async getAllProducts() {
        let filter: any = {};
        filter.isDeleted = false;
        //sorts in descending order based on the date created
        return await Product.find(filter, "-__v").sort({ createdAt: 'desc' });
    }

    async editById(name: string, obj: Partial<IProduct>) {
        if(await Product.findOne({ name: name, isDeleted: false })){
            const filter = { name: name, isDeleted: false };
            return await Product.findOneAndUpdate(filter, { $set: obj }, { new: true });
        }
    }

}