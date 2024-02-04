const express = require("express");
const {
  getAllPosts,
  getPost,
  makePost,
  addUpVote,
  updatePost
} = require("../controllers/postController");
const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/:id").get(getPost);
router.route("").post(makePost);
router.route("/upvote").patch(addUpVote);
// router.route("/updatePost").patch(updatePost);

module.exports = router;
