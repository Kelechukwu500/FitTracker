import React from "react";

// Mock reminders data
const reminders = [
  {
    time: "6:00 AM",
    message: "Morning run scheduled",
    type: "Workout",
  },
  {
    time: "12:30 PM",
    message: "Log your lunch",
    type: "Nutrition",
  },
  {
    time: "3:00 PM",
    message: "Drink a glass of water",
    type: "Hydration",
  },
  {
    time: "8:00 PM",
    message: "Evening walk",
    type: "Workout",
  },
];

const typeColors = {
  Workout:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Nutrition: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Hydration:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

const UpcomingReminders = () => (
  <div className="max-w-xl mx-auto bg-yellow-50 dark:bg-yellow-900 rounded shadow p-6 mb-8">
    <h3 className="text-lg font-bold mb-4 text-center text-yellow-800 dark:text-yellow-200">
      Upcoming Reminders
    </h3>
    <ul className="space-y-3">
      {reminders.map((reminder, idx) => (
        <li
          key={idx}
          className={`flex items-center justify-between rounded p-3 shadow-sm ${
            typeColors[reminder.type] || ""
          }`}
        >
          <div>
            <span className="font-semibold">{reminder.message}</span>
            <span className="block text-xs text-gray-500">{reminder.type}</span>
          </div>
          <span className="text-sm font-medium">{reminder.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default UpcomingReminders;
