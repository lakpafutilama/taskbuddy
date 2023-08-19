const Task = require("../model/taskSchema");
const { response } = require("../utils/response");

async function getTasks(req, res, next) {
  try {
    const data = await Task.find({
      where: {
        user_id: req.params.id,
      },
    });
    res.json(response(data, res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function getSpecificTask(req, res, next) {
  try {
    const data = await Task.find({
      where: {
        user_id: req.params.id,
        task_status: req.params.ts,
      },
    });
    res.json(response(data, res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function createTask(req, res, next) {
  try {
    await Task.create(req.body);
    res.json(response("New task created"));
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    await Task.update(req.body);
    res.json(response("Task updated"));
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    await Task.delete();
    res.json(response("New task created"));
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getTasks,
  getSpecificTask,
  createTask,
  updateTask,
  deleteTask,
};
