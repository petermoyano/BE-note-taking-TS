const pool = require("../../db");
const queries = require("./queries");

const getNotes = async (req, res, next) => {
    pool.query(queries.getNotes, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

const getNoteById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getNoteById, [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

const createNote = async (req, res, next) => {
    const { title, markdown } = req.body;
    console.log(title, markdown);
    pool.query(queries.createNote, [title, markdown], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
};

module.exports = {
    getNotes,
    getNoteById,
    createNote,
};
