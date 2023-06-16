const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getNotes);
router.get("/:id", controller.getNoteById);
router.post("/", controller.createNote);
router.put("/", controller.updateNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;
