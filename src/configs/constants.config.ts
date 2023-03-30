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
    USER: "user"
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
        // INVALID_USERNAME: "UserName does not exist.",
        // INVALID_PASSWORD: "Incorrect password.",
        // UPDATED: "User updated successfully.",
        // FETCHEDALL: "All available users fetched successfully",
        // DELETED: "User deleted successfully",
        // LOGGEDIN: "Successfully logged in",
        // LOGGEDOUT: "Successfully logged out"
    },
    USER: {
        DUPLICATE_EMAIL: "Email already exist.",
        CREATED: "User created successfully.",
        // DUPLICATE_USERNAME: "UserName already exist.",
        // INVALID_USERNAME: "UserName does not exist.",
        // INVALID_PASSWORD: "Incorrect password.",
        // INVALID_ID: "User ID does not exist.",
        // NOT_ID: "User ID is not a valid ID.",
        // UPDATED: "User updated successfully.",
        // FETCHED: "User fetched successfully",
        // FETCHEDALL: "All available users fetched successfully",
        // DELETED: "User deleted successfully",
        // LOGGEDIN: "Successfully logged in",
        // LOGGEDOUT: "Successfully logged out"
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