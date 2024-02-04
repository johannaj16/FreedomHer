const express = require("express");
const { authenticateUser } = require("../middleware/authentication.js");
const {
  getAllPosts,
  getPost,
  makePost,
  addUpVote,
  updatePost,
  getAllPostsForUser,
} = require("../controllers/postController");

const { makeComment, addComment, getAllCommentsForUser,getCommentsForPost } = require("../controllers/commentController");
const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);
router.route("/").post(authenticateUser, makePost);
router.route("/upvote/:id").patch(authenticateUser, addUpVote);
router.route("/:id").patch(authenticateUser, updatePost);
// router.route("/updatePost").patch(authenticateUser,updatePost);
router.route("/comment/:id").patch(authenticateUser, addComment);

router.route("/comment").post(authenticateUser, makeComment);

router.route("/userComments/:id").get(getAllCommentsForUser);

router.route("/userPosts/:id").get(getAllPostsForUser);

router.route("/comment/:id").get(getCommentsForPost);

module.exports = router;
