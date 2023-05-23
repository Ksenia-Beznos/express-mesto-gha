const router = require("express").Router();
const { celebrate } = require("celebrate");
const auth = require("../middlewares/auth");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
  login,
  getAboutMe,
} = require("../controllers/users");

const { userValidation, userUpdateValidation } = require("../utils/joiSchemes");

router.post("/signup", createUser);
router.post("/signin", celebrate(userValidation), login);
router.get("/users", auth, getUsers);
router.get("/users/me", auth, getAboutMe);
router.get("/users/:id", auth, celebrate(userValidation), getUserById);
router.patch("/users/me", auth, celebrate(userUpdateValidation), updateUser);
router.patch(
  "/users/me/avatar",
  auth,
  celebrate(userUpdateValidation),
  updateAvatar
);

module.exports = router;
