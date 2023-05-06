const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'заполните поле'],
    minlength: [2, 'минимальное кол-во символов - 2'],
    maxlength: [30, 'максимальное кол-во символов - 30'],
  },
  about: {
    type: String,
    required: [true, 'заполните поле'],
    minlength: [2, 'минимальное кол-во символов - 2'],
    maxlength: [30, 'максимальное кол-во символов - 30'],
  },
  avatar: {
    type: String,
    required: [true, 'заполните поле'],
  },
});

module.exports = mongoose.model('User', userSchema);
