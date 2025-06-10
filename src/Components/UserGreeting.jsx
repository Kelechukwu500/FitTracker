import React from "react";

// Accepts a user object as prop. Replace with your actual user/auth logic.
const UserGreeting = ({ user }) => (
  <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-4 mb-8 text-center">
    <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
      Hello, {user?.name || "Guest"}!
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mt-2">
      Ready to crush your goals today?
    </p>
  </div>
);

export default UserGreeting;
