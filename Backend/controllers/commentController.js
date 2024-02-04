const mongoose = require("mongoose");
const commentData = require("../models/reply");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Post = require("../models/postData");

const makeComment = async (req, res) => {
    const { reply , author} = req.body; //req.body is params coming in from front end
    // const { userId } = req.user;
    try {
        const comment = await commentData.create({
        author,
        reply,
    });
      return res.status(200).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};


const addComment = async (req, res) => {
    console.log(req.params);
    console.log("adam print");
    // const { userId } = req.user; // User ID from authenticated user
    const { id: post_id } = req.params; // Post ID from URL parameters
    const { reply } = req.body; // Assuming the comment text is sent in the request body
    
    if (!mongoose.Types.ObjectId.isValid(post_id)) {
      return res.status(402).json({ Error: "Post can't be found" });
    }
  
    try {
      const post = await Post.findOne({ _id: post_id });
      if (!post) {
        return res.status(405).json({ Error: "Post can't be found" });
      }
  
      // Create a new comment
      const newComment = await Comment.create({
        reply,
        author: userId, // Set the author of the comment to the current user
        // Add any other fields your Comment model requires
      });
  
      // Update the post to include the new comment's ObjectId in its comments array
      const updatedPost = await Post.findByIdAndUpdate(
        post_id,
        { $push: { comments: newComment._id } }, // Push the new comment's ID to the post's comments array
        { new: true } // Return the updated document
      );
  
      return res.status(200).json(updatedPost); // Or customize the response as needed
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
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
  

module.exports = {
    makeComment,
    addComment
};