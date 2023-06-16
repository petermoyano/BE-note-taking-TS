const pool = require("../../db");

const getNotes = async (req, res, next) => {
    pool.query("SELECT * FROM notes", (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

module.exports = {
    getNotes,
};
