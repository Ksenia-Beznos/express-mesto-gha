const User = require('../models/user');
const { validationErrors } = require('../utils/errors');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: "На сервере произошла ошибка" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).send({ message: 'Пользователь не найден' });
      return;
    }
    res.send(user);
  } catch (err) {
    res.status(400).send({ message: 'Некорректные данные' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.status(201).send(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      validationErrors(err, res);
    } else {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true, runValidators: true },
    );
    res.send(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      validationErrors(err, res);
    } else if (err.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
    } else {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    }
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true, runValidators: true },
    );
    res.send(user);
  } catch (err) {
    if (err.name === 'ValidationError') {
      validationErrors(err, res);
    } else if (err.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
    } else {
      res.status(500).send({ message: "На сервере произошла ошибка" });
    }
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
};
