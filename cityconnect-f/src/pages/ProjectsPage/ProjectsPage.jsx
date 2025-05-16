import React, { useState, useEffect } from "react";
import ProjectFilterSearch from "./ProjectFilterSearch";
import ProjectList from "./ProjectList";
import ViewProjectDetail from "../ProjectViewDetail/ViewProjectDetail";
import { projects } from "../../data/projectOverviewData";

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const applyFilters = () => {
    let result = projects;

    if (departmentFilter) {
      result = result.filter((project) =>
        project.departments.includes(departmentFilter)
      );
    }

    if (searchTerm) {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFilter) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      switch (dateFilter) {
        case "thisYear":
          result = result.filter(
            (project) =>
              new Date(project.startDate).getFullYear() === currentYear
          );
          break;
        case "lastYear":
          result = result.filter(
            (project) =>
              new Date(project.startDate).getFullYear() === currentYear - 1
          );
          break;
        case "next6Months":
          const sixMonthsLater = new Date(
            currentDate.setMonth(currentDate.getMonth() + 6)
          );
          result = result.filter(
            (project) => new Date(project.deadline) <= sixMonthsLater
          );
          break;
        default:
          break;
      }
    }

    setFilteredProjects(result);
  };

  useEffect(() => {
    applyFilters();
  }, [departmentFilter, searchTerm, dateFilter]);

  const handleFilterChange = (department) => {
    setDepartmentFilter(department);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleDateFilterChange = (filter) => {
    setDateFilter(filter);
  };

  const handleViewDetails = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg sm:max-w-screen-xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
        City Projects
      </h1>
      <ProjectFilterSearch
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        onDateFilterChange={handleDateFilterChange}
      />
      <ProjectList
        projects={filteredProjects}
        onViewDetails={handleViewDetails}
      />
      {selectedProject && (
        <ViewProjectDetail
          project={selectedProject}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
