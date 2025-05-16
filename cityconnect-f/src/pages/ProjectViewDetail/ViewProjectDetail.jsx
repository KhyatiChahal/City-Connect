import React from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const ViewProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  const statusColor = {
    "In Progress": "bg-blue-100 text-blue-800",
    Delayed: "bg-red-100 text-red-800",
    Completed: "bg-green-100 text-green-800",
    Planning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColor[project.status]
            }`}
          >
            {project.status}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="mr-2 text-gray-500" size={20} />
            <span className="text-sm">Start Date: {project.startDate}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 text-gray-500" size={20} />
            <span className="text-sm">Deadline: {project.deadline}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 text-gray-500" size={20} />
            <span className="text-sm">Location: {project.location}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-2 text-gray-500" size={20} />
            <span className="text-sm">
              Budget: ₹{project.budget.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Departments Involved</h3>
          <div className="flex flex-wrap gap-2">
            {project.departments.map((dept, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Lead Department</h3>
          <div className="flex items-center">
            <Users className="mr-2 text-gray-500" size={20} />
            <span>{project.leadDepartment}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Project Timeline</h3>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: "30%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{project.startDate}</span>
            <span>{project.deadline}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-green-800">On Track Tasks</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-green-800">75%</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-yellow-800">Budget Utilized</span>
                <DollarSign className="text-yellow-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-yellow-800">60%</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-red-800">Delays</span>
                <AlertTriangle className="text-red-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-red-800">2</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectDetail;
