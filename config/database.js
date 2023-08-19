const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;
const db_name = process.env.DB_NAME;
const dbUrl = url + db_name;

const dbConnect = async () => {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected Successfully");
};
module.exports = dbConnect;
