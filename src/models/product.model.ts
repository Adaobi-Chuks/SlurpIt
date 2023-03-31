import { model, Schema } from 'mongoose';
import {DATABASES} from "../configs/constants.config";
import getStatus from '../utils/getStatus';

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
    },
    quantityHistory: [Number],
}, {
    timestamps: true
});

productSchema.pre("save", async function (next) {
    this.lastSaleDate = new Date();
    this.lastSaleQuantity = this.quantity;
    this.quantityHistory.push(this.quantity!);
    this.daysToRunOut = Math.round(this.quantity! / 50);
    this.status = getStatus(this.quantity!);
    next();
});

const Product = model(DATABASES.PRODUCT, productSchema);
export default Product;