const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    complete: {
        type: Boolean,
        default: false
    }
})

const TaskModel = mongoose.model('ToDoTask', TaskSchema);
module.exports = TaskModel;