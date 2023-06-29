import { seedDB } from "./data";
const Pool = require("pg").Pool;

let pool = new Pool({
    user: "notes_c8ty_user",
    host: "dpg-cieplllph6etu3ta376g-a",
    database: "notes",
    password: "q8OEVf9DI0y7TlRjXe1aAHmrLAFLWKpW",
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error("Error acquiring client", err.stack);
        return;
    }
    client.query(seedDB, (err, result) => {
        release();
        if (err) {
            return console.error("Error executing query", err.stack);
        }
        console.log("DB seeded");
    });
    pool.end();
});

module.exports = pool;
