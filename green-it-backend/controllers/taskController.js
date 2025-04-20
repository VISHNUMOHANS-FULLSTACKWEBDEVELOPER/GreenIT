const Task = require("../models/Task");

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, user: req.user.userId });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};