const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: String,
  done: Boolean,
})

module.exports = Todo = mongoose.model("todos", todoSchema);