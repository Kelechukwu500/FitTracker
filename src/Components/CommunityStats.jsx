import React from "react";

// Mock community stats data
const stats = [
  { label: "Total Users", value: 1240, color: "purple-700" },
  { label: "Workouts Logged Today", value: 312, color: "green-600" },
  { label: "Meals Logged Today", value: 210, color: "blue-600" },
  { label: "Steps Taken Today", value: "2,340,000", color: "yellow-500" },
];

const CommunityStats = () => (
  <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 mb-8">
    <h3 className="text-lg font-bold mb-4 text-center">Community Stats</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded p-4 shadow-sm"
        >
          <span className={`text-2xl font-bold text-${stat.color}`}>
            {stat.value}
          </span>
          <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CommunityStats;
