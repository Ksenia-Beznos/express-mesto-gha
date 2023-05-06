const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(helmet());

app.use((req, res, next) => {
  req.user = {
    _id: '645560a50c277a613c6d8af4',
  };

  next();
});

app.use(bodyParser.json());
app.use(router);

app.listen(PORT);
