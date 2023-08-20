const db = require("../associations/association");
const Task = db.task;

const findTask = async (uid, queries) => {
  try {
    queries.user_id = uid;
    const data = await Task.findAll({
      where: queries,
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
    await Task.delete({
      where: {
        id: t_id,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { findTask, postTask, editTask, removeTask };
