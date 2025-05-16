import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  MapPin,
  Search,
  Filter,
} from "lucide-react";

const EventCard = ({ title, type, date, location, departments, attendees }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            type === "Workshop"
              ? "bg-blue-100 text-blue-800"
              : type === "Seminar"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {type}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar size={16} className="mr-1" />
        <span className="mr-4">{date}</span>
        <MapPin size={16} className="mr-1" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Users size={16} className="mr-1" />
        <span>Departments: {departments.join(", ")}</span>
      </div>
      <div className="text-sm text-gray-500">
        <span>Attendees: {attendees}</span>
      </div>
    </div>
  );
};

const CapacityBuilding = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const events = [
    {
      title: "Smart City Technologies Workshop",
      type: "Workshop",
      date: "2024-10-15",
      location: "City Hall",
      departments: ["IT", "Urban Planning"],
      attendees: 50,
    },
    {
      title: "Sustainable Urban Development Seminar",
      type: "Seminar",
      date: "2024-11-20",
      location: "Convention Center",
      departments: ["Urban Planning", "Environment"],
      attendees: 100,
    },
    {
      title: "Emergency Response Training",
      type: "Training",
      date: "2024-09-05",
      location: "Fire Department HQ",
      departments: ["Fire", "Police", "Health"],
      attendees: 75,
    },
    {
      title: "Public Transportation Efficiency Workshop",
      type: "Workshop",
      date: "2024-12-03",
      location: "Transit Authority Office",
      departments: ["Transport", "Urban Planning"],
      attendees: 40,
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      (filter === "All" || event.type === filter) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.departments
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <BookOpen size={24} className="mr-2" />
        Capacity Building
      </h2>
      <div className="mb-4 flex flex-wrap items-center">
        <div className="relative mr-4 mb-2">
          <input
            type="text"
            placeholder="Search events..."
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
            <option>All</option>
            <option>Workshop</option>
            <option>Seminar</option>
            <option>Training</option>
          </select>
          <Filter
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors">
          <BookOpen size={16} className="mr-2" />
          Add New Event
        </button>
      </div>
    </div>
  );
};

export default CapacityBuilding;
