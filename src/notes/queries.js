const getNotes = "SELECT * FROM notes";
const getNoteById = "SELECT * FROM notes WHERE id = $1";
const createNote =
    "INSERT INTO notes (title, markdown) VALUES ($1, $2) RETURNING *";

module.exports = {
    getNotes,
    getNoteById,
    createNote,
};
