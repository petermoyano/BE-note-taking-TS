const { Client } = require("pg");

let db = new Client({
    connectionString: "postgres://note-db",
});

db.connect();

module.exports = db;
