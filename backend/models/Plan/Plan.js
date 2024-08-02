const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true },
    features: [String],
    limitations: [String],
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const planModel = mongoose.Model("Plan", planSchema);
module.exports = planModel;
