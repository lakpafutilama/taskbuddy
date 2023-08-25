const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/analytics", (req, res) => {
  res.render("dragNdrop");
});

module.exports = router;
