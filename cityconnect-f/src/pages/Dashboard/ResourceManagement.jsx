import React, { useState } from "react";
import { Wrench, Users, Truck, Cpu, Search, Filter } from "lucide-react";
import { resources } from "../../data/resourceData";

const ResourceCard = ({ icon, name, department, type, availability }) => {
  const icons = {
    Wrench: <Wrench size={24} className="text-blue-500" />,
    Users: <Users size={24} className="text-green-500" />,
    Truck: <Truck size={24} className="text-yellow-500" />,
    Cpu: <Cpu size={24} className="text-purple-500" />,
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-2">
        {icons[icon]}
        <h3 className="text-lg font-semibold ml-2">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-1">Department: {department}</p>
      <p className="text-sm text-gray-600 mb-1">Type: {type}</p>
      <p className="text-sm text-gray-600 mb-1">
        Availability:{" "}
        <span
          className={`font-medium ${
            availability === "Available" ? "text-green-600" : "text-red-600"
          }`}
        >
          {availability}
        </span>
      </p>
    </div>
  );
};

const ResourceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredResources = resources.filter(
    (resource) =>
      (filter === "All" || resource.type === filter) &&
      (resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Wrench size={24} className="mr-2" />
        Resource Management
      </h2>
      <div className="mb-4 flex flex-wrap items-center">
        <div className="relative mr-4 mb-2">
          <input
            type="text"
            placeholder="Search resources..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="relative mb-2">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Machinery">Machinery</option>
            <option value="Expertise">Expertise</option>
            <option value="Technology">Technology</option>
          </select>
          <Filter
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceManagement;
