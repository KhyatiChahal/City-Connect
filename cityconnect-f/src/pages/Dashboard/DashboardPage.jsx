import React, { useState } from "react";
import SidebarNavigation from "./SidebarNavigation";
import DashboardHeader from "./DashboardHeader";
import CityData from "./CityData";
import ProjectsOverview from "./ProjectsOverview";
import ResourceManagement from "./ResourceManagement";
import SchedulingTool from "./SchedulingTool";
import CapacityBuilding from "./CapacityBuilding";
import DiscussionForum from "./DiscussionForum";
import UserManagement from "./UserManagement";
import ProjectPlanning from "./ProjectPlanning";
import CreateProject from "./CreateProject";

const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState('CityData');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'CreateProject':
        return <CreateProject />;
      case 'CityData':
        return <CityData />;
      case 'ProjectsOverview':
        return <ProjectsOverview />;
      case 'ResourceManagement':
        return <ResourceManagement />;
      case 'SchedulingTool':
        return <SchedulingTool />;
      case 'CapacityBuilding':
        return <CapacityBuilding />;
      case 'DiscussionForum':
        return <DiscussionForum />;
      case 'UserManagement':
        return <UserManagement />;
      case 'ProjectPlanning':
        return <ProjectPlanning />;
      default:
        return <CityData />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation setActiveComponent={setActiveComponent} />
        <main className="flex-1 p-4 sm:p-6 bg-gray-100 overflow-y-auto">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;