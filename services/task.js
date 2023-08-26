const db = require("../associations/association");
const Task = db.task;

const findTask = async (user, queries) => {
  try {
    queries.added_by = user;
    const data = await Task.findAll({
      where: queries,
      attributes: ["id", "title", "description", "priority", "duration"],
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const getTaskId = async (tid) => {
  try {
    const data = await Task.findAll({
      where: {
        id: tid,
      },
      attributes: ["id", "title", "description", "priority", "duration"],
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const postTask = async (payload) => {
  try {
    await Task.create(payload);
  } catch (err) {
    throw err;
  }
};

const editTask = async (t_id, payload) => {
  try {
    await Task.update(payload, {
      where: {
        id: t_id,
      },
    });
  } catch (err) {
    throw err;
  }
};

const removeTask = async (t_id) => {
  try {
    await Task.destroy({
      where: {
        id: t_id,
      },
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { findTask, postTask, getTaskId, editTask, removeTask };
