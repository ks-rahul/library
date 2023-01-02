const { validation, error } = require("../../helpers/response");

function errorHandler(err, req, res, next) {
  switch (true) {
    case typeof err === "string":
      // custom application error
      const is404 = err.toLowerCase().endsWith("not found");
      const statusCode = is404 ? 404 : 400;
      return res.status(statusCode).json(error(err.message, res.status));
    case err.name === "ValidationError":
      // mongoose validation error
      return res.status(400).json(validation(err));
    case err.name === "UnauthorizedError":
      // jwt authentication error
      return res.status(401).json(error("Unauthorized", res.status));
    default:
      return res
        .status(500)
        .json(
          error(
            err.message || "Something went wrong!",
            err.status || res.status
          )
        );
  }
}

module.exports = errorHandler;
