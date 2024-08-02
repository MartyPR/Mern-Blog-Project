const express = require("express");

const app = express();

//!PORT
const PORT = process.env.PORT || 5000;

//! Run SERVER
app.listen(PORT, console.log(`The server is running in ${PORT}`));


