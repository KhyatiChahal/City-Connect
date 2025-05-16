const mongoose = require("mongoose");
const { isEmail } = require('validator');

// Worker Schema
const workerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [6, "Minimum password length is 6 characters"]
    },
    employeeId: {
        type: String,
        required: [true, "Please enter your employee ID"]
    },
    createdDatetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Worker", workerSchema);
