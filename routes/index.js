const router = require('express').Router();

const userRouter = require('./users.js');
// const cardsRouter = require('./cards.js');

router.use(userRouter);
// router.use(cardsRouter);

module.exports = router;
