const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

// console.log(`${process.env.PORT}`);



connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
 
app.listen(5000, console.log(`server starting at port ${PORT}`));
