//Create Post

const postModel = require("../../models/Post/Post");

const CreatePost = async (req, res) => {
  try {
    const postData = req.body;
    const postCreated = await postModel.create(postData);

    res.json({
      status: "success",
      message: "cPost created successfully",
      postCreated,
    });
  } catch (error) {
    res.json(error);
  }
};
//ListPost
const listPosts = async (req, res) => {
    try {
      const postData = req.body;
      const postCreated = await postModel.create(postData);
  
      res.json({
        status: "success",
        message: "cPost created successfully",
        postCreated,
      });
    } catch (error) {
      res.json(error);
    }
  };
  