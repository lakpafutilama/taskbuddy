const express = require("express");
const { getUser, addUser } = require("../controllers/userController");
const validateUser = require("../validators/userValidator");
const router = express.Router();

router.get("/", getUser);

router.post("/", validateUser, addUser);

module.exports = router;
