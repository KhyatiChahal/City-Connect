// src/pages/Home/FeatureHighlights.jsx
import React from 'react';

const features = [
  { title: "Seamless Data Sharing", description: "Easily share data across departments." },
  { title: "Unified Planning", description: "Collaborate on projects with a unified platform." },
  { title: "Efficient Project Management", description: "Track project progress and updates efficiently." }
];

const FeatureHighlights = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
