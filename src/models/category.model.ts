import { model, Schema } from 'mongoose';
import {DATABASES} from "../configs/constants.config";

const categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    }
}, {
    timestamps: true
});

const Category = model(DATABASES.CATEGORY, categorySchema);
export default Category;