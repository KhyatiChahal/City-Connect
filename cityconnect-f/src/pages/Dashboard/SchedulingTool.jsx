import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  CheckSquare,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const TaskCard = ({ task, index, toggleTaskCompletion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            task.status === "Completed"
              ? "bg-green-100 text-green-800"
              : task.status === "In Progress"
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {task.status}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar size={16} className="mr-1" />
        <span className="mr-4">Due: {task.dueDate}</span>
        <Users size={16} className="mr-1" />
        <span>{task.department}</span>
      </div>
      <button
        className="text-blue-500 text-sm flex items-center mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Hide Details" : "Show Details"}
        {isExpanded ? (
          <ChevronUp size={16} className="ml-1" />
        ) : (
          <ChevronDown size={16} className="ml-1" />
        )}
      </button>
      {isExpanded && (
        <div className="text-sm text-gray-600 mb-2">
          <p className="mb-1">
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>Dependencies:</strong> {task.dependencies.join(", ")}
          </p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <button
          className={`px-3 py-1 rounded ${
            task.status === "Completed"
              ? "bg-gray-100 text-gray-800"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => toggleTaskCompletion(index)}
          disabled={task.status === "Completed"}
        >
          {task.status === "Completed" ? "Completed" : "Mark as Complete"}
        </button>
        {task.status === "Delayed" && (
          <span className="flex items-center text-yellow-600">
            <AlertCircle size={16} className="mr-1" />
            Delayed
          </span>
        )}
      </div>
    </div>
  );
};

const SchedulingTool = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Traffic Light Installation",
      department: "Transport",
      dueDate: "2024-10-15",
      status: "In Progress",
      description:
        "Install new AI-driven traffic lights at major intersections",
      dependencies: ["Public Works", "Electricity"],
    },
    {
      title: "Water Pipeline Repair",
      department: "Water Supply",
      dueDate: "2024-08-30",
      status: "Delayed",
      description: "Repair main water pipeline in downtown area",
      dependencies: ["Public Works"],
    },
    {
      title: "Public Wi-Fi Setup",
      department: "IT",
      dueDate: "2024-09-20",
      status: "Completed",
      description: "Set up public Wi-Fi hotspots in central park",
      dependencies: ["Urban Development"],
    },
    {
      title: "Road Resurfacing",
      department: "Public Works",
      dueDate: "2024-11-30",
      status: "In Progress",
      description: "Resurface main roads in the business district",
      dependencies: ["Transport"],
    },
  ]);

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "Completed" ? "In Progress" : "Completed";
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Clock size={24} className="mr-2" />
        Scheduling Tool
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors">
          <CheckSquare size={16} className="mr-2" />
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default SchedulingTool;
