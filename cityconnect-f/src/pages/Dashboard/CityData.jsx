import React from 'react';
import { Users, MapPin, TreePine, Building2 } from 'lucide-react';

const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center">
    <div className="mr-4 text-blue-500">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const CityData = () => {
  // Example statistics; adjust these values based on your project’s requirements
  const cityStats = [
    { icon: <Users size={24} />, title: "Population", value: "2,500,000" },
    { icon: <MapPin size={24} />, title: "Area", value: "1,200 km²" },
    { icon: <Building2 size={24} />, title: "Density", value: "2,083/km²" },
    { icon: <TreePine size={24} />, title: "Parks", value: "250" },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">City Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cityStats.map((stat, index) => (
          <StatCard key={index} icon={stat.icon} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default CityData;
