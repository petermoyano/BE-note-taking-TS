const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getNotes);
router.get("/:id", controller.getNoteById);
router.post("/", controller.createNote);

module.exports = router;
