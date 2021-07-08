const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res, next) => {
  Task.find()
    .then((result) => {
      res.send({ data: result });
    })
    .catch((error) => {
      console.log(error, "error during geting task");
      return res.status(400).json({ success: false, error });
    });
};

module.exports.createNewTask = (req, res, next) => {
  const body = req.body;
  const task = new Task(body);

  if (!task.text) {
    return res
      .status(400)
      .json({ success: false, error: "invalid data during creating task" });
  }

  task
    .save(body)
    .then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch((error) => {
      console.log(error, "error during creating task");
    });
};

module.exports.changeTaskInfo = (req, res, next) => {
  const body = req.body;
  const task = new Task(body);
  Task.updateOne({ _id: task._id }, task)
    .then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch((error) => {
      console.log(error, "error during updating task", task._id);
      return res.status(400).json({ success: false, error });
    });
};

module.exports.deleteTask = (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch((error) => {
      console.log(error, "error uring delete one task", req.params.id);
      return res.status(400).json({ success: false, error });
    });
};

module.exports.deleteAllTasks = (req, res, next) => {
  Task.deleteMany({})
    .then(() => {
      Task.find().then((result)=> {
         res.send(result);
      })
    })
    .catch((error) => {
      console.log(error, "error during delete all tasks");
      return res.status(400).json({ success: false, Error });
    });
};
