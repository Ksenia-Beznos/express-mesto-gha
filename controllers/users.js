const User = require('../models/user');

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (err) {
		res.status(500).send({ message: 'Ошибка на сервере' });
	}
};

const getUserById = async (req, res) => {
	try {
		console.log(req.params);
		const { id } = req.params;
		const user = await User.findById(id);
		if (!user) {
			res.status(404).send({ message: 'Пользователь не найден' });
			return; 
		} else {
			res.send(user);
		}
	} catch (err) {
		res.status(404).send({ message: 'Пользователь не найден' });
	}
};

const createUser = async (req, res) => {
	try {
		const { name, about, avatar } = req.body;
		if (!name || !about || !avatar) {
			res.status(400).send({ message: 'Некорректные данные' });
			return;
		}
		const user = await User.create({ name, about, avatar });
		res.status(201).send(user);
	} catch (err) {
		if (err.name === 'ValidationError') {
			res.status(400).send({ message: 'Некорректные данные' });
		} else {
			res.status(500).send({ message: 'Ошибка на сервере' });
		}
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
};
