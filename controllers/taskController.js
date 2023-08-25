const { response } = require("../utils/response");
const {
  findTask,
  postTask,
  editTask,
  removeTask,
  getTaskId,
} = require("../services/task");

async function getTasks(req, res, next) {
  try {
    const data = await findTask(req.params.user, req.query);
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
    const data = await getTaskId(req.params.id);
    if (!data)
      return res.status(400).json(response("Id not found", res.statusCode));
    await editTask(req.params.id, req.body);
    res.json(response("Task updated", res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    await removeTask(req.params.id);
    console.log(req.params.id);
    res.json(response("Task deleted", res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
