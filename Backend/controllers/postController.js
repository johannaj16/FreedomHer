const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const Post = require("../models/postData");
const User = require("../models/users");
const CustomError = require("../errors");

//get all the posts
const getAllPosts = async (req, res) => {
  try{
    const posts = await Post.find({});
    res.status(StatusCodes.OK).json({ posts });
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get a specific post
const getPost = async (req, res) => {
    try{
        const { id } = req.params;
        const thePost = await Post.findById(id);
        return res.status(200).json(thePost);
      }
    catch (error) {
    res.status(400).json({ error: error.message });
    }
};

//get all posts from a user
const getAllPostsForUser = async (req, res) => {
  //get all the comments, and then only get the ones that are by author
  const { id } = req.params;
  try{
      // const coms = await commentData.find({});
      const userPosts = await Post.find({ author: id });
      console.log(userPosts);
      res.status(200).json(userPosts)
  }
  catch (error) {
      res.status(400).json({ error: error.message });
  }
}

//makes a post
// const createPost = async (req, res) => {
//   const { name, userId } = req.user;
//   const { title, description } = req.body;
//   if (!title || !description) {
//     throw new CustomError.BadRequestError(
//       "Please provide both title and description for the post"
//     );
//   }

//   const post = await Post.create({
//     userId: userId,
//     username: name,
//     title: title,
//     description: description,
//   });

//   res.status(StatusCodes.CREATED).json({ post });
// };

const makePost = async (req, res) => {
    const { title, content, genre, comments } = req.body; //req.body is params coming in from front end
    const {userId} = req.user;
    vote = 0;

    // const user = User.findById(userId);
    const user = await User.findById(userId);
    
    const { profileImage } = user;
    console.log("theeee userrr: " + profileImage);
    try {
      const post = await Post.create({
        profileImage,
        author: userId,
        title,
        content,
        vote,
        genre,
        comments,
    });
      return res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const addUpVote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ Error: "Post can't be found" });
    }
    try {
      // Directly increment the vote field using $inc operator
      const updatedPost = await Post.findOneAndUpdate(
        { _id: id },
        { $inc: { vote: 1 } }, // Increment vote by 1
        { new: true } // Return the updated document
      );
      if (!updatedPost) {
        return res.status(404).json({ Error: "Post can't be found" });
      }
      // Return the updated vote count
      return res.status(200).json(updatedPost.vote);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
};
  


const updatePost = async (req, res) => {
  const { userId } = req.user;
  const { id: post_id } = req.params;
  const { title, description } = req.body;
  const post = await Post.findOne({ _id: post_id });

  if (!post) {
    throw new CustomError.NotFoundError(
      `Post wasnt found with id : ${post_id} `
    );
  }

  if (String(userId) !== String(post.userId)) {
    throw new CustomError.UnauthorizedError(
      `Ownership of post belongs to someone else`
    );
  }

  post.title = title;
  post.description = description;
  await post.save();

  const postObject = post.toObject();
  const { likes } = postObject;
  delete postObject.updatedAt;

  res.status(StatusCodes.OK).json({ ...postObject, likes: likes.length });
};

const editPost = async (req, res) => {
    const { id } = req.params;
    
    const alrExists = await mongoose.Types.ObjectId.isValid(id);
    if (alrExists) {
      return res.status(200).json({ Error: "Post can't be found" });
    }
  
    const post = await postData.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  
    if (!(await postData.findById(id))) {
      return res.status(404).json({ Error: "Post can't be found" });
    }
    res.status(200).json(post);
  };

const deletePost = async (req, res) => {
  const { userId } = req.user;
  const { id: post_id } = req.params;
  const post = await Post.findOne({ _id: post_id });
  if (!post) {
    throw new CustomError.NotFoundError(
      `Post wasnt found with id : ${post_id} `
    );
  }

  if (String(userId) !== String(post.userId)) {
    throw new CustomError.UnauthorizedError(
      `Ownership of post belongs to someone else`
    );
  }

  await post.deleteOne();

  res
    .status(StatusCodes.OK)
    .json({ msg: `Successful Post deletion of id: ${post_id}` });
};


const getPfp = async (req, res) => {
  try {
    const { id } = req.params;
    const theUser = await User.findById(id); // Use await to ensure the promise resolves
    console.log(theUser);
    // Assuming you only want to send back the profile picture URL,
    // and assuming the profile picture URL is stored in a field named `profileImage` of the user document.
    // Adjust the field name accordingly if it's stored differently.
    if (theUser) {
      res.status(200).json({ profileImage: theUser.profileImage });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//Liking Controller
const likePost = async (req, res) => {
  const { userId } = req.user;
  const { id: post_id } = req.params;
  const { type } = req.query;
  const post = await Post.findOne({ _id: post_id });
  if (!type) {
    throw new CustomError.BadRequestError(
      "Please specify whether you want to like or dislike"
    );
  }
  if (!post) {
    throw new CustomError.NotFoundError(
      `Post wasnt found with id : ${post_id} `
    );
  }

  if (type === "like" && !post.likes.includes(userId)) {
    if (post.dislikes.includes(userId)) {
      post.dislikes.pull(userId);
    }
    post.likes.push(userId);
    await post.save();
    return res.status(StatusCodes.CREATED).json({ msg: "liked successfully" });
  } else if (type === "like") {
    return res.status(409).json({ error: "Resource already exists" });
  }

  if (type === "dislike" && !post.dislikes.includes(userId)) {
    if (post.likes.includes(userId)) {
      post.likes.pull(userId);
    }
    post.dislikes.push(userId);
    await post.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "disliked successfully" });
  } else if (type === "dislike") {
    return res.status(409).json({ error: "Resource already exists" });
  }

  const jsonPost = post.toObject();
  res.status(StatusCodes.OK).json({ jsonPost });
};





module.exports = {
  getAllPosts,
  makePost,
  getPost,
  deletePost,
  likePost,
  addUpVote,
  updatePost,
  getAllPostsForUser,
  getPfp,
};