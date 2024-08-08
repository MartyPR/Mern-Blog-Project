const express = require("express");
const {
  CreatePost,
  listPosts,
  updatePost,
  postDetail,
  deletePost,
} = require("../../controllers/Post/PostCtrl");

const postRoute = express.Router();

postRoute.post("/create", CreatePost);
postRoute.get("/list", listPosts);
postRoute.get("/:postId", postDetail);
postRoute.put("/:postId", updatePost);
postRoute.delete("/:postId", deletePost);

module.exports = postRoute;
