const jwt = require("jsonwebtoken");

const middlewareAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(404).send({ message: "Токен отстутствует" });
  }
  try {
    req.user = jwt.verify(token, "FJeq0bP5YA}j#AJnGZWzrB*JY%lTt6");
    next();
  } catch {}
};

module.exports = middlewareAuth;
