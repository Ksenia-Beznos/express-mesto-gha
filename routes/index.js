const router = require('express').Router();

const userRouter = require('./users');
const cardsRouter = require('./cards');

router.use(userRouter);
router.use(cardsRouter);
router.use((req, res) => {
  res.status(404).send({ message: 'несуществующий адрес' });
});

module.exports = router;
