const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    role: {
        type: mongoose.Schema.Types.String,
        ref: "users"
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