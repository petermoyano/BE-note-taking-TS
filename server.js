const express = require("express");
const notesRoutes = require("./src/notes/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home of BE");
});

app.use("/notes", notesRoutes);
app.listen(port, () => {
    console.log(`BE-note-taking-TS listening at http://localhost:${port}`);
});
