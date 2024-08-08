//Create Post
const postModel = require("../../models/Post/Post");

const CreatePost = async (req, res) => {
  try {
    const postData = req.body;
    console.log(postData);

    const postCreated = await postModel.create(postData);

    res.json({
      status: "success",
      message: "Post created successfully",
      postCreated,
    });
  } catch (error) {
    res.json(error);
  }
};
//ListPost
const listPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    res.json({
      status: "success",
      message: "Post List successfully",
      posts,
    });
  } catch (error) {
    res.json(error);
  }
};
//post details
const postDetail = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};

//updatePost
const updatePost = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};

//delete
const deletePost = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};
module.exports = { CreatePost, listPosts, updatePost, postDetail, deletePost };
