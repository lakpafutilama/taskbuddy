const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;

const dbConnect = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connection Successfull");
};
module.exports = dbConnect;
