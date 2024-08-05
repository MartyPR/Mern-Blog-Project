const mongoose = require("mongoose");
const connectDB = async () => {
  console.log("Trying to connect Database....");
  try {
    const connection = await mongoose.connect(process.env.MONGODB_KEY);
    console.log(`DB Connected successfully ${connection}`);
  } catch (error) {
    console.error(`error connecting to MongoDB ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
