import { model, Schema } from 'mongoose';
import {DATABASES} from "../configs/constants.config";

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    quantity: {
        type: Number,
        required: false,
        default: 0,
        trim: true
    },
    category: {
        type: String,
        ref: DATABASES.CATEGORY,
        required: true,
        trim: true
    },
    lastSaleDate: {
        type: Date
    },
    lastSaleQuantity: {
        type: Number
    }
}, {
    timestamps: true
});

productSchema.pre("save", async function (next) {
    this.lastSaleDate = new Date();
    this.lastSaleQuantity = this.quantity;
    next();
});

const Product = model(DATABASES.PRODUCT, productSchema);
export default Product;