const express = require("express");

const {
    getPosts,
    getPost,
    makePost,
    signUp,
    login,
} = require("../controllers/controller");

const router = express.Router();

//get all posts
router.get("/", getPosts);

//get a specific post
router.get("/:id", getPost);

//make a post
router.post("/", makePost);

//sign up user
router.post("/signup", signUp);

router.post("/login", login);

//log in user
router.po

module.exports = router;