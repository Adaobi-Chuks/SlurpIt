import { model, Schema } from "mongoose";
import {DATABASES} from "../configs/constants.config";

const employeeSchema = new Schema({
    fullName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 100, 
        trim: true
    },
    companyEmail: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    accessLevel: {
        type: Number,
        required: true,
        lowercase: true,
        trim: true
    }
}, { 
    timestamps: true
});

const Employee = model(DATABASES.EMPLOYEE, employeeSchema);
export default Employee;