const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
  deleteAllTasks,
} = require("../controllers/task.controller");

router.get("/tasks", getAllTasks);
router.post("/tasks", createNewTask);
router.patch("/tasks", changeTaskInfo);
router.delete("/tasks", deleteAllTasks);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
