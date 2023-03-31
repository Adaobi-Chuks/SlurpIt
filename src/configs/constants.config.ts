const DATABASE_URI = process.env.DATABASE_URI;
const PORT = process.env.PORT || 9871;
const SALTROUNDS = 10;
const SECRET = process.env.SECRET!;
const MAXAGE = 3 * 24 * 60 * 60;
const ENUM = {
    USER: "user",
    ADMIN: "admin"
};
const DATABASES = {
    EMPLOYEE: "employee",
    USER: "user",
    CATEGORY: "category",
    PRODUCT: "product"
};
const MESSAGES = {
    DATABASE: {
        CONNECTED: "MongoDB is connected",
        ERROR: "There was an error while connecting to the database."
    },
    EMPLOYEE: {
        DUPLICATE_EMAIL: "Email already exist.",
        CREATED: "Employee created successfully.",
        NOT_ID: "Employee ID is not a valid ID.",
        FETCHED: "Employee fetched successfully",
        INVALID_ID: "Employee ID does not exist.",
        FETCHEDALL: "All available Employees fetched successfully",
        // INVALID_USERNAME: "UserName does not exist.",
        // INVALID_PASSWORD: "Incorrect password.",
        // UPDATED: "User updated successfully.",
        // DELETED: "User deleted successfully",
        // LOGGEDIN: "Successfully logged in",
        // LOGGEDOUT: "Successfully logged out"
    },
    USER: {
        DUPLICATE_EMAIL: "Email already exist.",
        CREATED: "User created successfully.",
        NOT_ID: "User ID is not a valid ID.",
        UPDATED: "User updated successfully.",
        FETCHED: "User fetched successfully",
        FETCHEDALL: "All available users fetched successfully",
        INVALID_ID: "User ID does not exist.",
        LOGGEDOUT: "Successfully logged out",
        INVALID_PASSWORD: "Incorrect password.",
        LOGGEDIN: "Successfully logged in",
        // DUPLICATE_USERNAME: "UserName already exist.",
        // INVALID_USERNAME: "UserName does not exist.",
        // DELETED: "User deleted successfully",
    },
    CATEGORY: {
        DUPLICATE_NAME: "Name already exist.",
        CREATED: "Category created successfully.",
        // NOT_ID: "User ID is not a valid ID.",
        // UPDATED: "User updated successfully.",
        // FETCHED: "User fetched successfully",
        // FETCHEDALL: "All available users fetched successfully",
        // INVALID_ID: "User ID does not exist.",
        // LOGGEDOUT: "Successfully logged out",
        // INVALID_PASSWORD: "Incorrect password.",
        // LOGGEDIN: "Successfully logged in",
        // DUPLICATE_USERNAME: "UserName already exist.",
        // INVALID_USERNAME: "UserName does not exist.",
        // DELETED: "User deleted successfully",
    },
    PRODUCT: {
        DUPLICATE_NAME: "Name already exist.",
        CREATED: "Product created successfully.",
        FETCHEDALL: "All available products fetched successfully",
        INVALID_NAME: "Name does not exist.",
        ADDED: "Product added successfully.",
        // UPDATED: "User updated successfully.",
        // FETCHED: "User fetched successfully",
        // LOGGEDOUT: "Successfully logged out",
        // INVALID_PASSWORD: "Incorrect password.",
        // LOGGEDIN: "Successfully logged in",
        // DUPLICATE_USERNAME: "UserName already exist.",
        // INVALID_USERNAME: "UserName does not exist.",
        // DELETED: "User deleted successfully",
    },
    AUTH: {
        TOKENERROR: 'Access Denied: Token not provided',
        INVALIDTOKEN: 'Access Denied: Invalid token',
        DENIED: 'Access Denied: Unauthorized request'
    },
};

export {
    DATABASE_URI,
    PORT,
    SALTROUNDS,
    SECRET,
    MAXAGE,
    ENUM,
    DATABASES,
    MESSAGES
};