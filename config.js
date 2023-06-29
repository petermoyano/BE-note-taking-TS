/** Common config for notes app */

// read .env files and make environmental variables

require("dotenv").config();

const DB_URI =
    process.env.NODE_ENV === "test"
        ? "postgresql:///notes_test"
        : "postgres://notes_c8ty_user:q8OEVf9DI0y7TlRjXe1aAHmrLAFLWKpW@dpg-cieplllph6etu3ta376g-a/notes_c8ty";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
};
