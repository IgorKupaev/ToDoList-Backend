const { getTodos, createNewTodo, removeOneTodo, removeAllTodos, editTodoText, editTodoDone } = require("../services/todo-services");

const allTodos = async (req, res) => {
  try {
    const todos = await getTodos();
    res.status(200).send(todos);
  } catch (error) {
    res.status(400).send('Error while get todo list');
  }
}

const createTodo = async (req, res) => {
  try {
    const todo = await createNewTodo(req.body.text);

    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send('Error while creating todo');
  }
};

const removeTodo = async (req, res) => {
  try {
    removeOneTodo(req.body.id).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('Error while removing todo');
  }
}

const removeAll = async (req, res) => {
  try {
    removeAllTodos().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send('Error while removing todos');
  }
}

const editText = async (req, res) => {
  try {
    editTodoText(req.body.id, req.body.text).then(result => {
      res.status(200).send(result);
    })
  } catch (error) {
    res.status(400).send('Error while editing todo');
  }
}

const editDone = async (req, res) => {
  try {
    editTodoDone(req.body.id).then(result => {
      res.status(200).send(result);
    })
  } catch (error) {
    res.status(400).send('Error while editing todo');
  }
}

module.exports = {
  allTodos,
  createTodo,
  removeTodo,
  removeAll,
  editText,
  editDone,
}