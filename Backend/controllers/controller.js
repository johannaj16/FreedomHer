const postData = require("../models/postData");
const userData = require("../models/users");
const comment = require("../models/reply");
const mongoose = require("mongoose");

//get all posts
const getPosts = async (req, res) => {
    const posts = await postData.find({}).sort({ createdAt: -1 });
    return res.status(200).json(posts);
};

//get a specific post
const getPost = async (req, res) => {
    const { id } = req.params;
    const posts = await postData.findById(id);
    return res.status(200).json(posts);
};

const makePost = async (req, res) => {
    const { title, content, genre, comments} = req.body; //req.body is params coming in from front end
    vote = 0;
    try {
      const post = await postData.create({
        title,
        content,
        vote,
        genre,
        comments,
        author: userID
      });
      return res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //seems good
const signUp = async (req, res) => {
    const { username, password, profileImage } = req.body; //req.body is params coming in from front end
    try {
      const findUser = await userData.findOne({ username });
      if (findUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const newUser = await userData.create({ username, password, profileImage });
      return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  //seems good
  const login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const findUser = await userData.findOne({ username });
      if (!findUser) {
        return res.status(400).json({ message: "User does not exist" });
      }
      if (findUser.password === password) {
        return res.status(200).json(findUser);
      }
      return res.status(400).json({ message: "Incorrect password" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {
    getPosts,
    getPost,
    makePost,
    signUp,
    login,
};