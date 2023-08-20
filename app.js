require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");
const { errorHandler } = require("./utils/errorHandler");
const viewRouter = require("./routes/viewRoute");

const port = process.env.PORT;

const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.use(morgan("dev"));

app.use(express.static("sources"));

userRouter.use(errorHandler);
taskRouter.use(errorHandler);

app.use("/", viewRouter);
app.use("/user", userRouter);
app.use("/task", taskRouter);

app.get("*", (req, res) => {
  res.send("Route not found");
});

app.listen(port, function (err) {
  if (!err) {
    console.log(`Server started at http://localhost:${port}`);
  } else console.log(`Error while connecting to server`);
});

module.exports = app;
