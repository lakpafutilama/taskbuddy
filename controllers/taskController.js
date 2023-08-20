const { response } = require("../utils/response");
const {
  findTask,
  postTask,
  editTask,
  removeTask,
} = require("../services/task");

async function getTasks(req, res, next) {
  try {
    const data = await findTask(req.params.id, req.query);
    res.json(response(data, res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function createTask(req, res, next) {
  try {
    await postTask(req.body);
    res.json(response("New task created", res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    await editTask(req.params.id, req.body);
    res.json(response("Task updated", res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    await removeTask(req.params.id);
    res.json(response("Task deleted", res.statusCode));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
