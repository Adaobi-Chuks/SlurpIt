import { model, Schema, Types } from "mongoose";
import {ENUM, SALTROUNDS, DATABASES} from "../configs/constants.config";
import bcrypt from "bcrypt";
import EmployeeService from "../services/employee.service";
const {
    findById,
} = new EmployeeService();

const userSchema = new Schema({
    employeeId: {
        type: Types.ObjectId,
        ref: DATABASES.EMPLOYEE,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    role: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(SALTROUNDS);
        this.password = await bcrypt.hash(this.password, salt);
    }
    const employee = await findById(this.employeeId as string);
    if(employee){
        if(employee.accessLevel = 5) {
            this.role = ENUM.ADMIN;
        } else {
            this.role = ENUM.USER;
        }
    } else {
        const error = new Error("Employee not found");
        throw error;
    }
    next();
});

const User = model(DATABASES.USER, userSchema);
export default User;