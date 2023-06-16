const getNotes = "SELECT * FROM notes";
const getNoteById = "SELECT * FROM notes WHERE id = $1";
const createNote =
    "INSERT INTO notes (title, markdown) VALUES ($1, $2) RETURNING *";
const deleteNote = "DELETE FROM notes WHERE id = $1";
const updateNote = "UPDATE notes SET title = $1, markdown = $2 WHERE id = $3";

module.exports = {
    getNotes,
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
};
