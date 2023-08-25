const { body, validationResult } = require("express-validator");
const { response } = require("../utils/response");

const validateTask = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  body("task_status")
    .isIn(["Create", "Progress", "Hold", "Complete"])
    .withMessage("Task status must be Create, Progress, Hold or Complete"),
  body("priority")
    .isIn(["Low", "Medium", "High"])
    .withMessage("Priority must be Low, Medium, or High"),
  body("duration").isFloat().withMessage("Duration must be in float"),
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
module.exports = validateTask;
