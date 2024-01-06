export default (error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({ error: error.message, statusCode: error.statusCode });
  next(error);
};
