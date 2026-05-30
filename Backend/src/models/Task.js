import mongoose from "mongoose";

const tasksModel = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    createdTime: {
      type: String,
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", tasksModel);

export default Task;
