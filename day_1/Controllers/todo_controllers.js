const Todo = require('../Models/todoModel');

// Create todo controller
exports.create_todo = async (req, res) => {
    try {
        const {username, todotitle, status, category} = req.body;
        const newtodo = new Todo({
            username,
            todotitle,
            status, 
            category,
        });
        const savetodo = await newtodo.save();
        res.status(200).json(savetodo)

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

// Get todo controller
exports.get_todo = async (req, res) => {
    throw new Error("Nodemon")
    try {
        const data = await Todo.findById(req.params.id);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get All todos controller
exports.getAll_todo = async (req, res) => {
    try {
        const data = await Todo.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Update todo controller
exports.update_todo = async (req, res) => {
    try {
        const user = await Todo.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        });
        res.status(200).json("Todo has been updated");
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete todo controller
exports.delete_todo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Todo has been deleted");
    } catch(err) {
        return res.status(500).json(err);
    }
}