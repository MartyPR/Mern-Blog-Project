const express = require("express");
const connectDB = require("./utils/connectDB");
const postRoute = require("./routes/Post/PostRoute");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middlewares/ErrorHandlerMiddlewares");
//call the DB
connectDB();

const app = express();

//!PORT
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//!Error handling middleware
app.use(errorHandler);

//!Routes
app.use("/api/v1/post", postRoute);

//! Run SERVER
app.listen(PORT, console.log(`The server is running in ${PORT}`));
