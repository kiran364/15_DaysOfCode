const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    todotitle: {
        type: String,
    },
    status: {
        type: String,
    },
    category:{
        type: String,
        enum: ['work', 'hobby', 'task'],
        default: 'task'
    }
},
   {timestamps: true});

module.exports = mongoose.model('Todo', todoSchema);