export default interface IUser {
    employeeId: string;
    password: string;
    isDeleted: boolean;
    role: string
}

export interface IUserWithId extends IUser {
    _id?: string;
    id?: string;
}