function validationErrors(err, res) {
  const errors = { message: "" };

  Object.keys(err.errors).forEach((key) => {
    errors.message = err.errors[key].message;
  });

  res.status(400).send(errors);
}

module.exports = { validationErrors };
