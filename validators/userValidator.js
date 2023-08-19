const { body, validationResult } = require("express-validator");
const { response } = require("../utils/response");

const validateUser = [
  body("name").notEmpty().withMessage("Name field cannot be empty"),
  body("username").notEmpty().withMessage("Username cannot be empty"),
  body("email").isEmail().withMessage("Email must be in email format"),
  body("password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(
      "Password must have more than 8 characters, contains a capital letter, a lowercase, a number and an special character"
    ),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      const error = err.errors.map((e) => ({
        message: e.msg,
      }));
      return res
        .status(422)
        .json(response("Validation error", res.statusCode, error));
    }
    next();
  },
];
module.exports = validateUser;
