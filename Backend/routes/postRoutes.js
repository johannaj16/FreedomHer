const express = require("express");
const { authenticateUser } = require("../middleware/authentication.js");
const {
  getAllPosts,
  getPost,
  makePost,
  addUpVote,
  updatePost,
} = require("../controllers/postController");

const {
  makeComment,
  addComment,
} = require("../controllers/commentController");
const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);
router.route("/").post(authenticateUser, makePost);
router.route("/upvote:id").patch(authenticateUser, addUpVote);
router.route("/:id").patch(authenticateUser, updatePost);
// router.route("/updatePost").patch(updatePost);
router.route("/comment/:id").patch(addComment);

router.route("/comment").post(makeComment);

module.exports = router;
