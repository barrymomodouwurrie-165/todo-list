import express from "express";
import task from "../models/Task.js";
import Task from "../models/Task.js";
import dayjs from "dayjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const task = await Task.find();
    if (task) {
      res.status(200).json(task);
    } else {
      res.json({ message: "Task failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { task, time, date, createdTime } = req.body;
    // const createdTime = dayjs().valueOf();
    const newTask = new Task({ task, time, date, createdTime });
    const tasks = await newTask.save();
    if (tasks) {
      res.status(201).json(tasks);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      res.json({ message: "Task failed to delete" });
    } else {
      res.status(200).json({ message: "Task deleted sucessfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
});

export default router;
