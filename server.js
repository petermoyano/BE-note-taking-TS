const express = require("express");
const notesRoutes = require("./src/notes/routes");
const pool = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home of BE");
});

app.get("/ping", async (req, res, next) => {
    try {
        const result = await pool.query("SELECT NOW()");
        return res.json(result.rows[0]);
    } catch (error) {
        console.log("An error just ocurred!", error);
    }
});

app.use("/notes", notesRoutes);
app.listen(port, () => {
    console.log(`BE-note-taking-TS listening at http://localhost:${port}`);
});
