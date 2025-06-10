import React, { useState } from "react";

const tips = [
  "Drink at least 8 cups of water a day for optimal hydration.",
  "Aim for at least 30 minutes of physical activity most days.",
  "Eat a balanced diet rich in fruits, vegetables, and lean proteins.",
  "Get 7-9 hours of quality sleep each night.",
  "Take short breaks to stretch if you sit for long periods.",
  "Track your progress to stay motivated and accountable.",
  "Practice mindful eating and avoid distractions during meals.",
  "Warm up before workouts and cool down after.",
  "Set realistic fitness goals and celebrate small wins.",
  "Stay consistent—progress is better than perfection!",
];

const HealthTips = () => {
  // Pick a random tip on each render
  const [tip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);

  return (
    <div className="max-w-xl mx-auto bg-green-50 dark:bg-green-900 rounded shadow p-4 mb-8 text-center">
      <span className="text-green-800 dark:text-green-200 font-medium">
        {tip}
      </span>
    </div>
  );
};

export default HealthTips;
