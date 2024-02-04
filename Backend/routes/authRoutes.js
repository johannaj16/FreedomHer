const express = require("express");
const { authenticateUser } = require("../middleware/authentication");
const {
  register,
  login,
  logout,
  islogin,
} = require("../controllers/authController");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/islogin").get(authenticateUser, islogin);
module.exports = router;
