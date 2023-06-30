const Pool = require("pg").Pool;
const config = require("dotenv").config;
config();

let pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    //ssl: true,
    // user: "postgres",
    // host: "localhost",
    // database: "notes",
    // password: "postgres",
    // port: 5432,
});
console.log("pool: database_url is: ", process.env.DATABASE_URL);

module.exports = pool;
