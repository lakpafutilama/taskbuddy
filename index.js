require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnection");
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Task Buddy");
});

app.listen(port, function (err) {
  if (!err) {
    console.log(`Server started at http://localhost:${port}`);
    dbConnect();
  } else console.log(`Error connecting to server`);
});
