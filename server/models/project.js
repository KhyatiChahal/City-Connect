const mongoose = require("mongoose");

// Project Schema
const projectSchema = new mongoose.Schema({
    workerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Worker",
        required: true
    },
    title: {
        type: String,
        required: [true, "Please enter the project name"]
    },
    description: {
        type: String,
        required: [true, "Please enter the project description"]
    },
    departments: {
        type: [String], 
        required: [true, "Please enter departments involved in the project"]
    },
    location: {
        type: String,
        required: [true, "Please enter the project location"]
    },
    status: {
        type: String,
   enum: ["In Progress", "Completed", "Planning", "Delayed"],
        default: "Planned"
    },
    startDate: {
        type: Date,
        required: [true, "Please enter the project start date"]
    },
    deadline: {
        type: Date,
        required: [true, "Please enter the project deadline"]
    },
    budget: {
        type: Number,
        required: [true, "Please enter the project budget"]
    },
    leadDepartment: {
        type: String,
        required: [true, "Please enter the lead department"]
    },
    createdDatetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Project", projectSchema);
