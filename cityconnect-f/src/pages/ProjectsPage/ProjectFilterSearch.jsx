import React from "react";
import { Search, Filter, Calendar } from "lucide-react";

const ProjectFilterSearch = ({
  onFilterChange,
  onSearchChange,
  onDateFilterChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <select
        className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="Transport">Transport</option>
        <option value="IT">IT</option>
        <option value="Urban Planning">Urban Planning</option>
        <option value="Public Works">Public Works</option>
        <option value="Sanitation">Sanitation</option>
        <option value="Environment">Environment</option>
        <option value="Parks and Recreation">Parks and Recreation</option>
        <option value="Water Supply">Water Supply</option>
      </select>
      <select
        className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onDateFilterChange(e.target.value)}
      >
        <option value="">All Time</option>
        <option value="thisYear">This Year</option>
        <option value="lastYear">Last Year</option>
        <option value="next6Months">Next 6 Months</option>
      </select>
    </div>
  );
};

export default ProjectFilterSearch;
