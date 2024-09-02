//Create Post

const asyncHandler = require("express-async-handler");
const postModel = require("../../models/Post/Post");

const CreatePost = asyncHandler(async (req, res) => {
  const {  description } = req.body;
  // title,

  const postCreated = await postModel.create({ description });
  res.json({
    status: "success",
    message: "Post created successfully",
    postCreated,
  });
});
//ListPost
const listPosts = asyncHandler(async (req, res) => {
  const posts = await postModel.find();

  res.json({
    status: "success",
    message: "Post List successfully",
    posts,
  });
});
//post details
const postDetail = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const postFound = await postModel.findById(postId);
  if (!postFound) {
    throw new Error("Post not Found");
  }
  res.json({
    status: "success",
    message: "Post details",
    postFound,
  });
});

//updatePost
const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const postFound = await postModel.findById(postId);
  if (!postFound) {
    throw new Error("Post not Found");
  }
  const post = await postModel.findByIdAndUpdate(
    postId,
    { title: req.body.title, description: req.body.description },
    {
      new: true,
    }
  );

  res.json({
    status: "success",
    message: "Post Updated",
    post,
  });
});

//delete
const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const postFound = await postModel.findById(postId);
  if (!postFound) {
    throw new Error("Post not Found");
  }
  const postDeleted = await postModel.findByIdAndDelete(postId);

  res.json({
    status: "success",
    message: "Post Deleted",
    postDeleted,
  });
});
module.exports = { CreatePost, listPosts, updatePost, postDetail, deletePost };
