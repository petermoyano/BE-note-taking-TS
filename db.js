const Pool = require("pg").Pool;

let pool = new Pool({
    user: "notes_c8ty_user",
    host: "dpg-cieplllph6etu3ta376g-a",
    database: "notes",
    password: "q8OEVf9DI0y7TlRjXe1aAHmrLAFLWKpW",
    port: 5432,
});

module.exports = pool;
