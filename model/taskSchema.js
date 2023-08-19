const { mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
  user_id: { type: Number, unique: true },
  title: { type: String },
  description: { type: String },
  task_status: { type: String },
  priority: { type: String },
  duration: { type: Number },
});
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
