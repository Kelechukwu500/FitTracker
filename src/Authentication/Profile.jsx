import React, { useState } from "react";

const Profile = () => {
  // Example user data (replace with real data from API or context)
  const [user, setUser] = useState({
    username: "fituser",
    email: "fituser@example.com",
    firstName: "Fit",
    lastName: "User",
    age: 25,
    gender: "Male",
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setForm(user);
    setEditMode(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(form);
    setEditMode(false);
    // Optionally, send updated data to backend here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-white">
          Profile
        </h2>
        {!editMode ? (
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Username:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.username}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Email:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.email}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                First Name:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.firstName}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Last Name:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.lastName}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Age:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.age}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Gender:
              </span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {user.gender}
              </span>
            </div>
            <button
              onClick={handleEdit}
              className="w-full px-4 py-2 font-semibold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-200">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-200">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-200">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
                min="0"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-200">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-purple-700 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-full px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
