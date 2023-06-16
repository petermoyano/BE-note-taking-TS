const Pool = require("pg").Pool;

let pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notes",
    password: "postgres",
    port: 5432,
});

module.exports = pool;
