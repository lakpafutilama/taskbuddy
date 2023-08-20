const bcrypt = require("bcrypt");
const { response } = require("../utils/response");
const { readUser, createUsername, createUser } = require("../services/user");
const jwt = require("jsonwebtoken");

async function checkUser(req, res, next) {
  try {
    const data = await readUser({ username: req.body.username });
    if (!data) {
      res.status(401).json(response("User not found", res.statusCode));
      return;
    }
    const checkPass = await bcrypt.compare(req.body.password, data.password);
    if (!checkPass) {
      res.status(422).json(response("Password mismatch", res.statusCode));
      return;
    }
    // let token = jwt.sign({ id: user.id }, process.env.secretKey, {
    //   expiresIn: 1 * 24 * 60 * 60 * 1000,
    // });
    res.json(response("Login successfull", res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
  try {
    const username = await createUsername(req.body.username);
    const password = await bcrypt.hash(req.body.password, 10);
    const data = {
      name: req.body.name,
      username,
      email: req.body.email,
      password,
    };
    await createUser(data);
    res.json(response(`${username} created`, res.statusCode));
  } catch (err) {
    next(err);
  }
}

module.exports = { checkUser, addUser };
