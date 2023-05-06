const Card = require('../models/card');
const { validationErrors } = require("../utils/errors");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

const createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const card = await Card.create({ name, link, owner: req.user._id });
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      validationErrors(err, res);
    } else {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  }
};

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    res.send(card);
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
    } else {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  }
};

const addLike = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findByIdAndUpdate(
      id,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    res.send(card);
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
    } else {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  }
};

const removeLike = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findByIdAndUpdate(
      id,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    res.send(card);
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
    } else {
      res.status(500).send({ message: 'Ошибка на сервере' });
    }
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addLike,
  removeLike,
};
