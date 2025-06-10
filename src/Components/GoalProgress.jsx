import React from "react";

const GoalProgress = ({
  workouts = { current: 3, goal: 5 },
  steps = { current: 8000, goal: 10000 },
  calories = { current: 1500, goal: 2000 },
}) => {
  // Calculate progress percentages
  const workoutPercent = Math.min(
    (workouts.current / workouts.goal) * 100,
    100
  );
  const stepsPercent = Math.min((steps.current / steps.goal) * 100, 100);
  const caloriesPercent = Math.min(
    (calories.current / calories.goal) * 100,
    100
  );

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 mb-8">
      <h3 className="text-lg font-bold mb-4 text-center">
        Weekly Goal Progress
      </h3>
      {/* Workouts Goal */}
      <div className="mb-2 flex justify-between items-center">
        <span className="font-medium text-gray-700 dark:text-gray-200">
          Workouts
        </span>
        <span className="text-sm text-gray-500">
          {workouts.current} / {workouts.goal}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-purple-700 h-2.5 rounded-full"
          style={{ width: `${workoutPercent}%` }}
        ></div>
      </div>
      {/* Steps Goal */}
      <div className="mb-2 flex justify-between items-center">
        <span className="font-medium text-gray-700 dark:text-gray-200">
          Steps
        </span>
        <span className="text-sm text-gray-500">
          {steps.current.toLocaleString()} / {steps.goal.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${stepsPercent}%` }}
        ></div>
      </div>
      {/* Calories Goal */}
      <div className="mb-2 flex justify-between items-center">
        <span className="font-medium text-gray-700 dark:text-gray-200">
          Calories
        </span>
        <span className="text-sm text-gray-500">
          {calories.current} / {calories.goal}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-red-500 h-2.5 rounded-full"
          style={{ width: `${caloriesPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default GoalProgress;
