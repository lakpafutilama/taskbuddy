const db = require("../associations/association");
const User = db.user;

const readUser = async (check) => {
  try {
    const data = await User.findOne({
      where: check,
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const readSpecificUser = async (un) => {
  const data = await User.findAll({
    where: {
      username: {
        [db.Op.startsWith]: un,
      },
    },
  });
  return data;
};

const createUser = async (payload) => {
  try {
    await User.create(payload);
  } catch (err) {
    throw err;
  }
};

const createUsername = async (un) => {
  try {
    let uname = un.toLowerCase();
    const data = await readSpecificUser(uname);
    if (data.length > 0) {
      uname = uname + data.length;
    }
    return uname;
  } catch (err) {
    throw err;
  }
};

module.exports = { readUser, createUser, createUsername };
