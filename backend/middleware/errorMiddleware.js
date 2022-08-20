const notFound = (req, res, next) => {
  const error = new Error(`Not FOund - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
