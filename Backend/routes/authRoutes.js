const express = require("express");
const {
    signUp,
    login,
    logout
} = require("../controllers/authController");
const router = express.Router();

router.route("/signUp").post(signUp);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;