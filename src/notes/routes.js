const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", (req, res) => {
    controller.getNotes(req, res);
});

module.exports = router;
