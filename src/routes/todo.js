const express = require("express")
const router = express.Router();
const { allTodos, createTodo, removeTodo, removeAll, editText, editDone } = require('../controllers/todo-controller');
const { validationText } = require('../middlewares/todo-validation');

router.get('/allTodos', allTodos);
router.post('/createTodo', validationText, createTodo);
router.delete('/removeTodo', removeTodo);
router.delete('/removeAll', removeAll);
router.put('/editText', validationText, editText);
router.put('/editDone', editDone);

module.exports = router;