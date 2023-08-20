const express = require("express");
const { checkUser, addUser } = require("../controllers/userController");
const validateUser = require("../validators/userValidator");
const router = express.Router();

router.post("/login", checkUser);

router.post("/", validateUser, addUser);

module.exports = router;
