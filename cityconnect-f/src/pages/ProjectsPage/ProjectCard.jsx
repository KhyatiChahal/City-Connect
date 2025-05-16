import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project, onViewDetails }) => {
  const statusColor = {
    "In Progress": "bg-blue-100 text-blue-800",
    Delayed: "bg-red-100 text-red-800",
    Completed: "bg-green-100 text-green-800",
    Planning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.departments.map((dept, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
          >
            {dept}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusColor[project.status]
          }`}
        >
          {project.status}
        </span>
        <span className="text-sm text-gray-500">
          Deadline: {project.deadline}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Budget: ₹{project.budget.toLocaleString()}
        </span>
        <button
          onClick={() => onViewDetails(project.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition duration-300"
        >
          View Details
          <ArrowRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
