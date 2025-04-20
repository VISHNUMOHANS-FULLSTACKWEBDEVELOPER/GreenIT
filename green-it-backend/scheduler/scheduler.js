const Task = require("../models/Task");

exports.startScheduler = () => {
    setInterval(async () => {
        const tasks = await Task.find({ status: "pending" }).sort({ priority: -1 });
        for (let task of tasks) {
            task.status = "running";
            await task.save();

            // Simulate task processing
            console.log("Running task:", task.name);
            await new Promise(r => setTimeout(r, 2000));

            task.status = "completed";
            await task.save();
        }
    }, 10000);
};