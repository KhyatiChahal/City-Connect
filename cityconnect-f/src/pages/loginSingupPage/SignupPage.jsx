import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { User, Mail, Lock } from "lucide-react";
import axios from "axios";

const SignupPage = () => {
  const [userType, setUserType] = useState("citizen");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      if (userType === "department" && !employeeId) {
        alert("Please enter your Employee ID.");
        return;
      }

      const response = await axios.post("http://localhost:8081/worker/signup", {
        name,
        email,
        password,
        employeeId: userType === "department" ? employeeId : null,
      });
      if (response.status === 201) {
        setSuccessMessage("Sign Up Successful!"); 
        navigate("/login", { state: { email } }); 
      }
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">City Connect Signup</h2>
          <p className="text-sm text-gray-600 mt-2">Create your account based on your role</p>
        </div>

        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* User Type Selector */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setUserType("citizen")}
              className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg border ${
                userType === "citizen" ? "bg-indigo-600 text-white" : "bg-white text-gray-700 border-gray-300"
              } shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              Citizen
            </button>
            <button
              type="button"
              onClick={() => setUserType("department")}
              className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg border ${
                userType === "department" ? "bg-indigo-600 text-white" : "bg-white text-gray-700 border-gray-300"
              } shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              Department Worker
            </button>
          </div>

          {/* Name Input */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Employee ID Input (conditionally rendered for department workers) */}
          {userType === "department" && (
            <div className="space-y-1">
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Employee ID</label>
              <div className="relative">
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  required={userType === "department"}
                  className="block w-full pl-3 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/candidate/login" className="text-indigo-600 hover:text-indigo-500 font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
