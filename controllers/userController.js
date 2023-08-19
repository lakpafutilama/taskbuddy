const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const { createUName } = require("../services/uniqueName");
const { response } = require("../utils/response");

async function getUser(req, res, next) {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
  try {
    const username = await createUName(req.body.username);
    const password = await bcrypt.hash(req.body.password, 10);
    const data = {
      name: req.body.name,
      username,
      email: req.body.email,
      password,
    };
    await User.create(data);
    res.json(response(`${username} created`, res.statusCode));
  } catch (err) {
    next(err);
  }
}

module.exports = { getUser, addUser };
