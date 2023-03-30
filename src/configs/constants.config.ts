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
    }
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