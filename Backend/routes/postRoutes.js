const express = require("express");
const authenticateUser = require("../utils/authentication.js");
const {
  getAllPosts,
  getPost,
  makePost,
  addUpVote,
  updatePost,
} = require("../controllers/postController");
const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);
router.route("/").post(authenticateUser, makePost);
router.route("/upvote:id").patch(authenticateUser, addUpVote);
router.route("/:id").patch(authenticateUser, updatePost);
// router.route("/updatePost").patch(updatePost);

module.exports = router;
