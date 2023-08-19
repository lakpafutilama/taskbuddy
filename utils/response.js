exports.response = (message, statusCode, data) => {
  let e = true;
  if (statusCode >= 200 && statusCode < 300) e = false;
  if (statusCode <= 300)
    return {
      data: message,
    };
  else
    return {
      error: e,
      code: statusCode,
      message,
      data,
    };
};
