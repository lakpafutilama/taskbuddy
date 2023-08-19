const app = require("../index");
async function registration() {
  const rebtn = document.getElementById("signupBtn");
  rebtn.addEventListener("click", () => {
    console.log("clicked");
  });
  await app.emailPasswordAuth.registerUser({
    email: "someone@example.com",
    password: "Pa55w0rd!",
  });
}
module.exports = registration;
