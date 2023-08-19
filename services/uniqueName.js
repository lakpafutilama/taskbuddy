const User = require("../model/userSchema");

async function createUName(un) {
  const data = await getUserU(un);
  let username = un;
  if (data.length > 0) {
    username = username + data.length;
  }
  return username;
}

async function getUserU(un) {
  const data = await User.find({
    username: un,
  });
  return data;
}
module.exports = { createUName, getUserU };
