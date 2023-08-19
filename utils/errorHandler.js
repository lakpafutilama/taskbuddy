const { response } = require("./response");

exports.errorHandler = (err, req, res, next) => {
  res.status(500).json(response(err, res.statusCode));
};
