const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
	console.log('start');
});
