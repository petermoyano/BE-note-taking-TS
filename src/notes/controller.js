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
    pool.query(queries.createNote, [title, markdown], (err, result) => {
        if (err) throw err;
        res.status(201).send("Note created!");
    });
};

const deleteNote = async (req, res, next) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getNoteByIdNote, [id], (err, result) => {
        const noteNotFound = result.rows.length === 0;
        if (noteNotFound) res.send("Note not found");
        if (err) throw err;
        res.status(200).send("Note deleted");
    });
};

const updateNote = async (req, res, next) => {
    const { title, markdown, id } = req.body;
    pool.query(queries.getNoteById, [id], (err, result) => {
        const noteNotFound = result.rows.length === 0;
        if (noteNotFound) res.send("Note not found");
        if (err) throw err;

        pool.query(queries.updateNote, [title, markdown, id], (err, result) => {
            if (err) throw err;
            res.status(200).send("Note updated");
        });
    });
};

module.exports = {
    getNotes,
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
};
