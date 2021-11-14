const router = require('express').Router();
const TodoController = require('../Controllers/todo_controllers')

//Create Todo 
router.post('/',TodoController.create_todo);

//Get Todo by Id
router.get("/:id", TodoController.get_todo);

//Update Todo by Id
router.patch('/:id', TodoController.update_todo);

//Delete Todo item using Id
router.delete("/:id", TodoController.delete_todo);

// Get All todos
router.get("/",TodoController.getAll_todo);

module.exports = router;