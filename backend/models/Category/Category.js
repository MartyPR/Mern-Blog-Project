const mongoose = require("mongoose");

//schema

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    description: { type: String },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    user: {
      type: mongoose.Schema.Types.ObjectId, ref: "User",
    },
  },
  {
    timestamps:true
  }
);

const CategoryModel = mongoose.model('Category',categorySchema);

module.exports = CategoryModel;