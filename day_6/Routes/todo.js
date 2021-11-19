const router = require('express').Router();
const TodoController = require('../Controllers/todo_controllers')
const auth = require("../middleware/auth");

//Create Todo 
router.post('/', auth, TodoController.create_todo);

//Get Todo by Id
router.get("/", auth, TodoController.get_todo);

router.get('/task', TodoController.getCompletedTask);

//Update Todo by Id
router.patch('/:id', TodoController.update_todo);

//Delete Todo item using Id
router.delete("/:id", TodoController.delete_todo);

// Get All todos
router.get("/",TodoController.getAll_todo);

module.exports = router;