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
    daysToRunOut: {
        type: Number
    },
    lastSaleQuantity: {
        type: Number
    },
    status: {
        type: String
    }
}, {
    timestamps: true
});

productSchema.pre("save", async function (next) {
    this.lastSaleDate = new Date();
    this.lastSaleQuantity = this.quantity;
    this.daysToRunOut = 0;
    this.status = "...";
    next();
});

const Product = model(DATABASES.PRODUCT, productSchema);
export default Product;