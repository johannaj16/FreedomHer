const mongoose = require("mongoose");
const commentData = require("../models/reply");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Post = require("../models/postData");

const makeComment = async (req, res) => {
  const { reply, author } = req.body; //req.body is params coming in from front end
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
  const { id: post_id } = req.params;
  const { reply } = req.body;
  console.log(req.user);
  const userId = req.user.userId; // Adjust according to your authentication implementation

  if (!mongoose.Types.ObjectId.isValid(post_id)) {
    return res.status(400).json({ Error: "Invalid Post ID" });
  }

  try {
    const post = await Post.findById(post_id);
    if (!post) {
      return res.status(404).json({ Error: "Post not found" });
    }

    const newComment = await commentData.create({
      reply,
      author: userId, // Ensure this matches your Comment schema
    });

    const updatedPost = await Post.findByIdAndUpdate(
      post_id,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllCommentsForUser = async (req, res) => {
    //get all the comments, and then only get the ones that are by author
    const { id } = req.params;
    try{
        // const coms = await commentData.find({});
        const userComments = await commentData.find({ author: id }).limit(50);
        console.log(userComments);
        res.status(200).json(userComments)
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getCommentsForPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id)
          .populate('comments') // Populate the comments field
          .exec();
        console.log(post);
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    makeComment,
    addComment,
    getAllCommentsForUser,
    getCommentsForPost,
};
  

// const updatePost = async (req, res) => {
//   const { userId } = req.user;
//   const { id: post_id } = req.params;
//   const { title, description } = req.body;
//   const post = await Post.findOne({ _id: post_id });

//   if (!post) {
//     throw new CustomError.NotFoundError(
//       `Post wasnt found with id : ${post_id} `
//     );
//   }

//   if (String(userId) !== String(post.userId)) {
//     throw new CustomError.UnauthorizedError(
//       `Ownership of post belongs to someone else`
//     );
//   }

//   post.title = title;
//   post.description = description;
//   await post.save();

//   const postObject = post.toObject();
//   const { likes } = postObject;
//   delete postObject.updatedAt;

//   res.status(StatusCodes.OK).json({ ...postObject, likes: likes.length });
// };

