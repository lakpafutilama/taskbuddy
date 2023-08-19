const express = require("express");
const validateTask = require("../validators/taskValidator");
const router = express.Router();

router.get("/:id");

router.post("/", validateTask);

module.exports = router;
