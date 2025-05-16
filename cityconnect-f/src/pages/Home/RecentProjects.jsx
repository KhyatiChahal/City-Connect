import React, { useState } from 'react';
import { projects } from "../../data/projectOverviewData";
import ViewProjectDetail from '../ProjectViewDetail/ViewProjectDetail';

// Sort the projects based on the most recent startDate or status (e.g., "Completed")
const recentProjects = projects
  .filter(project => project.status === 'Completed') // Only show completed projects
  .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Sort by startDate, most recent first
  .slice(0, 3); // Display the top 3 most recent completed projects

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State to track the selected project

  const handleLearnMore = (project) => {
    setSelectedProject(project); // Set the selected project when "Learn more" is clicked
  };

  const handleCloseDetail = () => {
    setSelectedProject(null); // Close the detailed view
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Recent Projects</h2>
        {/* If a project is selected, show the project detail component */}
        {selectedProject ? (
          <ViewProjectDetail project={selectedProject} onClose={handleCloseDetail} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold text-blue-500 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <button
                  onClick={() => handleLearnMore(project)}
                  className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Learn more
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;