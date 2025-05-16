import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      setLoggedInUser(userName);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("employeeId");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex-none">
          <h1 className="text-2xl font-bold text-gray-800">CityConnect</h1>
        </div>

        <div className="flex-1 text-center">
          <Link to="/" className="text-gray-600 hover:text-blue-500 py-2 px-4">
            Home
          </Link>
        </div>

    
        <div className="flex-none flex items-center space-x-6">
          <Link
            to="/citizen-portal"
            className="text-gray-600 hover:text-blue-500 py-2 px-4"
          >
            Citizen Portal
          </Link>
          <div className="flex items-center">
            <button
              className="block lg:hidden text-gray-600 hover:text-blue-500 mr-4"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {loggedInUser ? (
              <div className="relative">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
                  onClick={toggleDropdown}
                >
                  {loggedInUser}
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2">
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    <Link
                      to="/dashboard"
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500"
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
                onClick={handleLoginClick}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
