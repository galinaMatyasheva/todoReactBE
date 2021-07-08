const mongoose = require("mongoose");
const express = require("express");

const app = express();
const { Schema } = mongoose;

const taskSchema = new Schema({
  text: String,
  isCheck: Boolean,
});

module.exports = Task = mongoose.model("tasks", taskSchema);
