const express = require("express");
const validateTask = require("../validators/taskValidator");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/:id", getTasks);

router.post("/", validateTask, createTask);

router.put("/id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
