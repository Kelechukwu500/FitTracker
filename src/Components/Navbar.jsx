import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow">
    <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center">
        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
          Fit Tracker App
        </span>
      </Link>
      
      <form className="hidden md:flex items-center flex-1 justify-center mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-700 text-white rounded-r-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Search
        </button>
      </form>
  
      <div className="flex items-center space-x-2">
        <ul className="flex flex-row space-x-4 font-medium">
          <li>
            <Link
              to="/"
              className="py-2 px-3 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/workouts"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              to="/nutrition"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Nutrition
            </Link>
          </li>
          <li>
            <Link
              to="/progress"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Progress
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="py-2 px-3 text-gray-700 hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
