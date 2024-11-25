const express = require('express');
const task = express.Router();

//Model
const TaskModel = require('../models/task')

task.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

task.get('/tasks', async (req, res) => {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
})

task.get('/task/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await TaskModel.findById(id)
        res.status(200).json(task);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

task.post('/task/create', async (req, res, next) => {
    const newTask = new TaskModel({
        name: req.body.name,
        data: req.body.data,
        complete: req.body.complete
    })
    try {
        const dbTask = await newTask.save();
        res.status(201).json(dbTask);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

task.put('/task/modify/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const taskUpdate = await TaskModel.findByIdAndUpdate(id, obj)
        res.status(200).json(taskUpdate);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

task.put('/task/complete/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const taskComplete = await TaskModel.findById(id)
        taskComplete.complete = !taskComplete.complete
        taskComplete.save()
        res.status(200).json(taskComplete);
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }
})

task.delete('/task/delete/:id', async (req, res, next) => {

    const id = req.params.id;
    try {
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        // res.status(500).json({ message: err.message });
        next(error)
    }

})

module.exports = task;