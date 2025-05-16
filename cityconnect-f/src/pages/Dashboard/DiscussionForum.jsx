import React, { useState } from "react";
import {
  MessageSquare,
  Users,
  Eye,
  EyeOff,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ForumPost = ({
  title,
  author,
  department,
  date,
  content,
  replies,
  accessLevel,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            accessLevel === "Public"
              ? "bg-green-100 text-green-800"
              : accessLevel === "Inter Department"
              ? "bg-blue-100 text-blue-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {accessLevel}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Users size={16} className="mr-1" />
        <span className="mr-4">
          {author} ({department})
        </span>
        <span>{date}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        {isExpanded ? content : `${content.substring(0, 100)}...`}
      </p>
      <button
        className="text-blue-500 text-sm flex items-center mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
        {isExpanded ? (
          <ChevronUp size={16} className="ml-1" />
        ) : (
          <ChevronDown size={16} className="ml-1" />
        )}
      </button>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{replies} replies</span>
        <button className="text-blue-500 text-sm">Reply</button>
      </div>
    </div>
  );
};

const DiscussionForum = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const forumPosts = [
    {
      title: "Improving Inter-departmental Communication",
      author: "John Doe",
      department: "Human Resources",
      date: "2024-08-15",
      content:
        "I believe we need to establish better channels for inter-departmental communication. Currently, there are often delays and misunderstandings when different departments need to collaborate on projects. Perhaps we could implement a centralized communication platform or regular inter-departmental meetings?",
      replies: 5,
      accessLevel: "Inter Department",
    },
    {
      title: "Public Feedback on New Traffic System",
      author: "Jane Smith",
      department: "Transport",
      date: "2024-08-10",
      content:
        "We've received mixed feedback from the public regarding the new AI-driven traffic system. While many appreciate the reduced congestion during peak hours, some have expressed confusion about the changing traffic light patterns. We should consider launching a public education campaign to help citizens understand and adapt to the new system.",
      replies: 12,
      accessLevel: "Public",
    },
    {
      title: "Update on IT Department Budget Allocation",
      author: "Mike Johnson",
      department: "IT",
      date: "2024-08-05",
      content:
        "Hello team, I wanted to provide an update on our department's budget allocation for the upcoming fiscal year. We've received approval for the proposed increase to support our city-wide digital transformation initiatives. This will allow us to proceed with the planned upgrades to our network infrastructure and cybersecurity measures.",
      replies: 3,
      accessLevel: "Intra Department",
    },
    {
      title: "Proposal for Joint Urban Planning and Environmental Initiative",
      author: "Sarah Lee",
      department: "Urban Planning",
      date: "2024-07-28",
      content:
        "I'd like to propose a joint initiative between the Urban Planning and Environmental departments. The idea is to develop a comprehensive green spaces plan that integrates sustainable urban development with environmental conservation. This could include creating more parks, implementing green building standards, and developing urban farming projects.",
      replies: 8,
      accessLevel: "Inter Department",
    },
  ];

  const filteredPosts = forumPosts.filter(
    (post) =>
      (filter === "All" || post.accessLevel === filter) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare size={24} className="mr-2" />
        Discussion Forum
      </h2>
      <div className="mb-4 flex flex-wrap items-center">
        <div className="relative mr-4 mb-2">
          <input
            type="text"
            placeholder="Search posts..."
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
            <option>Public</option>
            <option>Inter Department</option>
            <option>Intra Department</option>
          </select>
          <Filter
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-4">
        {filteredPosts.map((post, index) => (
          <ForumPost key={index} {...post} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 transition-colors">
          <MessageSquare size={16} className="mr-2" />
          Create New Post
        </button>
      </div>
    </div>
  );
};

export default DiscussionForum;
