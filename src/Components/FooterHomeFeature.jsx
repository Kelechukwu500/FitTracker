import React, { useState } from "react";
import Image from "../assets/Fit Tracker.jpg"; // Adjust the path as necessary
import UserGreeting from "./UserGreeting"; // Assuming you have a UserGreeting component
import HealthTips from "./HealthTips"; // Assuming you have a HealthTips component
import GoalProgress from "./GoalProgress"; // Assuming you have a GoalProgress component
import UpcomingReminders from "./UpcomingReminders"; // Assuming you have an UpcomingReminders component
import CommunityStats from "./CommunityStats"; // Assuming you have a CommunityStats component

const FooterHomeFeature = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  // Simulate upload (no backend)
  const handleUpload = (e) => {
    e.preventDefault();
    if (selectedImage) {
      alert("Image uploaded successfully (simulated)!");
      setSelectedImage(null);
      setPreviewUrl(null);
    }
  };

  // Mock quick stats data
  const quickStats = [
    { label: "Workouts", value: 1, color: "purple-700" },
    { label: "Calories", value: 500, color: "red-500" },
    { label: "Water", value: "2L", color: "blue-500" },
    { label: "Steps", value: "8,000", color: "green-600" },
  ];

  // Mock recent activity
  const recentActivities = [
    {
      type: "Workout",
      description: "Completed morning run",
      date: "2025-05-26",
    },
    {
      type: "Nutrition",
      description: "Logged lunch: Grilled chicken salad",
      date: "2025-05-26",
    },
    {
      type: "Progress",
      description: "Lost 0.5kg this week",
      date: "2025-05-25",
    },
  ];

  // Motivational quote
  const quote =
    '"The secret of getting ahead is getting started." – Mark Twain';

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
        <div className="container mx-auto px-4">
          {/* Welcome Card at the Top */}
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-8 my-8 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 flex justify-center w-full md:w-auto">
              <img
                src={Image}
                alt="Fit Tracker"
                className="w-60 h-60 rounded-full shadow object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center md:text-left">
                Welcome to the Fit Tracker App
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-center md:text-left">
                Track your fitness journey with ease! Log your workouts, monitor
                your nutrition, and visualize your progress all in one place.
              </p>
              <p className="text-gray-700 dark:text-gray-400 text-center md:text-left">
                Stay motivated by setting goals, viewing your activity feed, and
                celebrating your achievements. Whether you’re a beginner or a
                fitness enthusiast, Fit Tracker helps you stay on track and
                reach your health goals.
              </p>
            </div>
          </div>

          {/* Imported components as cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
              <UserGreeting />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
              <HealthTips />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
              <GoalProgress />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
              <UpcomingReminders />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6 md:col-span-2">
              <CommunityStats />
            </div>
          </div>

          {/* First Row: Motivational Quote, Quick Stats, Shortcuts */}
          <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto pb-6">
            {/* Motivational Quote Card */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-purple-50 dark:bg-gray-700 rounded shadow p-4 text-center flex flex-col justify-center">
              <span className="italic text-purple-800 dark:text-purple-200">
                {quote}
              </span>
            </div>

            {/* Quick Stats Card */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4 text-center">
                Today's Quick Stats
              </h3>
              <div className="flex justify-around text-center">
                {quickStats.map((stat) => (
                  <div key={stat.label}>
                    <div className={`text-2xl font-bold text-${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Shortcuts */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4 text-center">Shortcuts</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/dashboard"
                  className="bg-purple-700 text-white px-4 py-2 rounded shadow hover:bg-purple-800"
                >
                  Dashboard
                </a>
                <a
                  href="/workouts"
                  className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
                >
                  Log Workout
                </a>
                <a
                  href="/nutrition"
                  className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  Log Nutrition
                </a>
                <a
                  href="/progress"
                  className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
                >
                  View Progress
                </a>
              </div>
            </div>
          </div>

          {/* Second Row: Features, Recent Activity, Upload Image */}
          <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto pb-6 mt-8">
            {/* Features Card */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2 text-center">Features:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li className="bg-gray-50 dark:bg-gray-700 rounded p-3 shadow-sm">
                  <span className="font-semibold">Personalized dashboard:</span>{" "}
                  View your workout and nutrition stats at a glance.
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded p-3 shadow-sm">
                  <span className="font-semibold">Easy logging:</span> Quickly
                  log workouts, meals, and progress photos.
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded p-3 shadow-sm">
                  <span className="font-semibold">Visualize achievements:</span>{" "}
                  See your milestones and progress visually.
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded p-3 shadow-sm">
                  <span className="font-semibold">Stay consistent:</span> Get
                  reminders and motivational tips to keep you on track.
                </li>
              </ul>
            </div>

            {/* Recent Activity Feed Card */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2 text-center">
                Recent Activity
              </h3>
              {recentActivities.length === 0 ? (
                <div className="text-center text-gray-500">
                  No recent activities.
                </div>
              ) : (
                <ul className="space-y-2">
                  {recentActivities.map((activity, idx) => (
                    <li key={idx} className="border-b border-gray-200 pb-2">
                      <span className="font-medium">{activity.type}</span>:{" "}
                      {activity.description}{" "}
                      <span className="text-xs text-gray-500">
                        ({activity.date})
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Progress Photo Upload Card */}
            <div className="min-w-[320px] max-w-xs flex-1 bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Upload Your Progress Photo
              </h2>
              <form
                onSubmit={handleUpload}
                className="flex flex-col items-center"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-4"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mb-4 rounded shadow w-48 h-48 object-cover"
                  />
                )}
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50"
                  disabled={!selectedImage}
                >
                  Upload Image
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Upload a photo to visually track your transformation over time.
                Your images are private and only visible to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterHomeFeature;
