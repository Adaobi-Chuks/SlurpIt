import ICategory from "../interfaces/category.interface";
import Category from "../models/category.model";

export default class CategoryService {

    async addCategory(name: string) {
        const _category = await Category.create(name);
        return await Category.findOne({ name: _category.name}, "-__v");
    }

    async getCategory(name: string) {
        return await Category.findOne({ name: name, isDeleted: false }, "-__v");
    }

}