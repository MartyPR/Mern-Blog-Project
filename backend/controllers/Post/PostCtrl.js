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
    const postList = await postModel.find();

    res.json({
      status: "success",
      message: "Post List successfully",
      postList,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports={CreatePost, listPosts}