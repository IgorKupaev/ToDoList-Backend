const Todo = require("../models/Todo");

const getTodos = async () => {
    return await Todo.find()
}

const createNewTodo = async (text) => {
    const newTodo = new Todo({text, done: false});
    const savedTodo = await newTodo.save();

    return savedTodo;
}

const removeOneTodo = async (id) => {
    return await Todo.deleteOne({_id: id});
}

const removeAllTodos = async () => {
    return await Todo.deleteMany({});
}

const editTodoText = async (id, text) => {
    return await Todo.findOneAndUpdate({_id: id}, {text: text})
}

const editTodoDone = async (id) => {
    const item = await Todo.findById(id);
    return await Todo.findOneAndUpdate({_id: id}, {done: !item.done})
}

module.exports = {
    getTodos,
    createNewTodo,
    removeOneTodo,
    removeAllTodos,
    editTodoText,
    editTodoDone
  }
  