import React, { useEffect, useState } from "react";

// Mock data for dashboard
const mockFitnessData = {
  overview: {
    totalWorkouts: 42,
    caloriesBurned: 12345,
    activeDays: 28,
    avgWorkoutDuration: 55, // minutes
    bestStreak: 7, // days
  },
  activityFeed: [
    {
      type: "Workout",
      description: "Completed upper body strength training",
      date: "2025-05-25",
    },
    {
      type: "Nutrition",
      description: "Logged breakfast: Oatmeal and fruit",
      date: "2025-05-25",
    },
    {
      type: "Progress",
      description: "Lost 1kg this week",
      date: "2025-05-24",
    },
  ],
  goals: [
    { label: "Weekly Workouts", target: 5, current: 4 },
    { label: "Calories Burned", target: 3000, current: 2500 },
    { label: "Active Days", target: 7, current: 6 },
  ],
};

const ProgressBar = ({ current, target }) => {
  const percent = Math.min(100, Math.round((current / target) * 100));
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
      <div
        className="bg-purple-600 h-3 rounded-full transition-all"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

const DashboardFeature = () => {
  const [fitnessData, setFitnessData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setFitnessData(mockFitnessData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );

  const overview = fitnessData?.overview || {};
  const activityFeed = fitnessData?.activityFeed || [];
  const goals = fitnessData?.goals || [];

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-2">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700 dark:text-purple-300">
        Dashboard
      </h2>
      {/* Overview Section */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">
            {overview.totalWorkouts ?? "N/A"}
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            Total Workouts
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">
            {overview.caloriesBurned ?? "N/A"}
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            Calories Burned
          </span>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-2">
            {overview.activeDays ?? "N/A"}
          </span>
          <span className="text-gray-600 dark:text-gray-300">Active Days</span>
        </div>
      </div>
      {/* Extra Overview Stats */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-50 dark:bg-gray-700 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-1">
            {overview.avgWorkoutDuration ?? "--"} min
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            Avg Workout Duration
          </span>
        </div>
        <div className="bg-purple-50 dark:bg-gray-700 rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-1">
            {overview.bestStreak ?? "--"} days
          </span>
          <span className="text-gray-600 dark:text-gray-300">Best Streak</span>
        </div>
      </div>
      {/* Goals Progress Section */}
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          Weekly Goals
        </h3>
        <div className="space-y-4">
          {goals.map((goal, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{goal.label}</span>
                <span className="text-xs text-gray-500">
                  {goal.current}/{goal.target}
                </span>
              </div>
              <ProgressBar current={goal.current} target={goal.target} />
            </div>
          ))}
        </div>
      </div>
      {/* Activity Feed Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 w-full">
        <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
          Activity Feed
        </h3>
        {activityFeed.length === 0 ? (
          <div className="text-gray-500">No recent activities.</div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {activityFeed.map((activity, idx) => (
              <li key={idx} className="py-3 flex items-center gap-3">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    activity.type === "Workout"
                      ? "bg-green-500"
                      : activity.type === "Nutrition"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                ></span>
                <span className="font-medium">{activity.type}</span>:{" "}
                <span className="flex-1">{activity.description}</span>
                <span className="text-xs text-gray-500 ml-2">
                  {activity.date}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashboardFeature;
