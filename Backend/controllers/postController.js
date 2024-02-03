const { StatusCodes } = require("http-status-codes");
const Post = require("../models/postData");
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
    const { id } = req.params;
    const posts = await postData.findById(id);
    return res.status(200).json(posts);
  };

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
    vote = 0;
    try {
      const post = await postData.create({
        title,
        content,
        vote,
        genre,
        comments,
        // author: userID
      });
      return res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const addUpVote = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(200).json({ Error: "Post can't be found" });
      }
    try {
        const {title, content, vote, genre, comments} = req.body;
    
      const post = await postData.findOneAndUpdate(
        { _id: id },
        {
          title, content, vote: vote + 1, genre, comments
        }
      );
        return res.status(200).json(vote + 1);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}



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

const editPost = async (req, res) => {
    const { id } = req.params;
    
    const alrExists = await mongoose.Types.ObjectId.isValid(id)
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

//Unliking controller
const unlikePost = async (req, res) => {
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

  if (post.likes.includes(userId)) {
    post.likes.pull(userId);
    await post.save();
    res.status(204).end();
  }

  if (type === "dislike" && post.dislikes.includes(userId)) {
    post.dislikes.pull(userId);
    await post.save();
    res.status(204).json({ msg: "removed dislike" });
  }

  throw new CustomError.NotFoundError(
    "Likes and Dislikes doesn't contain user"
  );
};

module.exports = {
  getAllPosts,
  makePost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
};