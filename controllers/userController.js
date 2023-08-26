const bcrypt = require("bcrypt");
const { response } = require("../utils/response");
const { readUser, createUsername, createUser } = require("../services/user");

async function checkUser(req, res, next) {
  try {
    const data = await readUser({ username: req.body.username });
    if (!data)
      return res.status(401).json(response("User not found", res.statusCode));

    const checkPass = await bcrypt.compare(req.body.password, data.password);
    if (!checkPass)
      return res
        .status(422)
        .json(response("Password mismatch", res.statusCode));

    res.json(response(data, res.statusCode));
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
  try {
    const userCheck = await readUser({ email: req.body.email });
    if (userCheck)
      return res
        .status(422)
        .json(response("Email duplication", res.statusCode));
    const username = await createUsername(req.body.username);
    const password = await bcrypt.hash(req.body.password, 10);
    const data = {
      name: req.body.name,
      username,
      email: req.body.email,
      password,
    };
    await createUser(data);

    res.json(response(`${username} registered`, res.statusCode));
  } catch (err) {
    next(err);
  }
}

module.exports = { checkUser, addUser };
