const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: String,
    type: { type: String, enum: ["CPU", "IO", "Memory"], required: true },
    priority: { type: Number, default: 1 },
    status: { type: String, enum: ["pending", "running", "completed"], default: "pending" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", taskSchema);