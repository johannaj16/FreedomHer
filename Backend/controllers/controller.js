const postData = require("../models/postData");
const userData = require("../models/users");
const comment = require("../models/reply");
const mongoose = require("mongoose");

//get all posts
const getPosts = async (req, res) => {
    const posts = await postData.find({}).sort({ createdAt: -1 });
    res.status(200).json(posts);
};

module.exports = {
    getPosts,
};