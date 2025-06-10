import React, { useState, useEffect } from "react";
import axios from "axios";

// Nutrition Log Component
const NutritionFeature = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showStats, setShowStats] = useState(false);

  // Fetch nutrition entries from backend API on mount
  useEffect(() => {
    axios
      .get("https://developer.edamam.com/edamam-nutrition-api")
      .then((res) => {
        setEntries(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Add new entry to backend and update state
  const handleEntryAdded = (entry) => {
    setEntries([entry, ...entries]);
  };

  // Filter and search logic
  const filteredEntries = entries.filter((entry) => {
    const matchesSearch = entry.food
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDate = filterDate ? entry.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  // Nutrition stats
  const stats = filteredEntries.reduce(
    (acc, entry) => {
      acc.calories += Number(entry.calories) || 0;
      acc.protein += Number(entry.protein) || 0;
      acc.carbs += Number(entry.carbs) || 0;
      acc.fat += Number(entry.fat) || 0;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  // Delete entry
  const handleDelete = async (idx) => {
    if (
      window.confirm(
        "Are you sure you want to delete this entry? This action cannot be undone."
      )
    ) {
      try {
        // If you have an ID, use it here instead of idx
        // await axios.delete(`https://api.example.com/fit-tracker/nutrition/${id}`);
        setEntries(entries.filter((_, i) => i !== idx));
      } catch {
        alert("Failed to delete entry.");
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-white py-8 px-2">
      <div className="w-full max-w-3xl mx-auto">
        <NutritionForm onEntryAdded={handleEntryAdded} />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-purple-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border border-purple-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
          <button
            className="text-purple-700 hover:underline font-semibold"
            onClick={() => setShowStats((s) => !s)}
          >
            {showStats ? "Hide" : "Show"} Daily Summary
          </button>
        </div>
        {showStats && (
          <div className="mb-4 p-4 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl shadow flex flex-wrap gap-4 justify-between">
            <div>
              <span className="font-bold text-purple-800">Calories:</span>{" "}
              <span className="text-purple-700">{stats.calories} kcal</span>
            </div>
            <div>
              <span className="font-bold text-purple-800">Protein:</span>{" "}
              <span className="text-purple-700">{stats.protein} g</span>
            </div>
            <div>
              <span className="font-bold text-purple-800">Carbs:</span>{" "}
              <span className="text-purple-700">{stats.carbs} g</span>
            </div>
            <div>
              <span className="font-bold text-purple-800">Fat:</span>{" "}
              <span className="text-purple-700">{stats.fat} g</span>
            </div>
          </div>
        )}
        <div className="mb-6 p-4 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-extrabold text-purple-800 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h14"
              />
            </svg>
            Nutrition Log
          </h3>
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="loader"></div>
              <span>Loading nutrition entries...</span>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-gray-400 py-8 text-center">
              No nutrition entries found.
            </div>
          ) : (
            <ul className="divide-y divide-purple-50">
              {filteredEntries.map((entry, idx) => (
                <li
                  key={idx}
                  className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 group hover:bg-purple-50 rounded-lg px-2 transition"
                >
                  <div>
                    <span className="font-semibold text-purple-900">
                      {entry.food}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      ({entry.date})
                    </span>
                    <div className="text-sm text-gray-700 mt-1 flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                        {entry.calories} kcal
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        {entry.protein}g protein
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        {entry.carbs}g carbs
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                        {entry.fat}g fat
                      </span>
                    </div>
                  </div>
                  <button
                    title="Delete"
                    onClick={() => handleDelete(idx)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-1 self-start md:self-center"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* Loader CSS */}
      <style>
        {`
        .loader {
          border: 4px solid #e9d5ff;
          border-top: 4px solid #a78bfa;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        `}
      </style>
    </div>
  );
};

// Nutrition Form Component
const NutritionForm = ({ onEntryAdded }) => {
  const [form, setForm] = useState({
    food: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.food || !form.calories) {
      setError("Food and calories are required.");
      return;
    }
    setLoading(true);
    const newEntry = {
      ...form,
      date: new Date().toISOString().split("T")[0],
    };
    axios
      .post("https://api.example.com/fit-tracker/nutrition", newEntry)
      .then((res) => {
        setLoading(false);
        if (onEntryAdded) onEntryAdded(res.data || newEntry);
        setForm({
          food: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
        });
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to add entry. Try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gradient-to-br from-purple-100 to-white rounded-2xl shadow-lg mb-8"
    >
      <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-purple-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h14"
          />
        </svg>
        Add Nutrition Entry
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="food"
            placeholder="Food"
            value={form.food}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Calories<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={form.calories}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Protein (g)
          </label>
          <input
            type="number"
            name="protein"
            placeholder="Protein (g)"
            value={form.protein}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Carbs (g)
          </label>
          <input
            type="number"
            name="carbs"
            placeholder="Carbs (g)"
            value={form.carbs}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fat (g)
          </label>
          <input
            type="number"
            name="fat"
            placeholder="Fat (g)"
            value={form.fat}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            min={0}
          />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2 transition"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Entry"}
      </button>
    </form>
  );
};

export default NutritionFeature;
