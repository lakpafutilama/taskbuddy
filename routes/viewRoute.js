const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/dashboard", (req, res) => {
  const queryString = req.query.user;
  const user = JSON.parse(decodeURIComponent(queryString));
  res.render("dashboard", { user });
});

router.get("/analytics", (req, res) => {
  const username = req.query.name;
  res.render("dragNdrop", { username });
});

module.exports = router;
