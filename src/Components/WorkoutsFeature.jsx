import React, { useState, useEffect } from "react";
import axios from "axios";

// Google Sign-In and Auth (stubbed)
const useGoogleAuth = () => {
  return { isSignedIn: true, signIn: () => {}, signOut: () => {} };
};

// Fetch custom workouts from backend
const fetchBackendWorkouts = async () => {
  const response = await axios.get(
    "https://api.example.com/fit-tracker/workouts"
  );
  return (response.data || []).map((workout) => ({
    ...workout,
    id: `backend-${workout.id}`,
    source: "Custom",
  }));
};

// Workouts List Component
const WorkoutsList = ({
  onSelectWorkout,
  refreshFlag,
  isSignedIn,
  onDeleteWorkout,
}) => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isSignedIn) return;
    setLoading(true);
    fetchBackendWorkouts()
      .then((backendWorkouts) => {
        setWorkouts(backendWorkouts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [refreshFlag, isSignedIn]);

  const filteredWorkouts = workouts.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isSignedIn)
    return (
      <div className="text-center text-gray-500 py-8">
        Please sign in to view workouts.
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center py-8">
        <div className="loader mr-2"></div>
        <span>Loading workouts...</span>
      </div>
    );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h2 className="text-2xl font-extrabold text-purple-800 tracking-tight">
          All Workouts
        </h2>
        <input
          type="text"
          placeholder="Search workouts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-purple-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredWorkouts.length === 0 && (
          <li className="col-span-2 text-center text-gray-400 py-8">
            No workouts found.
          </li>
        )}
        {filteredWorkouts.map((workout) => (
          <li
            key={workout.id}
            className="relative bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer group"
          >
            <div
              onClick={() => onSelectWorkout(workout)}
              className="flex flex-col gap-1"
            >
              <span className="text-lg font-semibold text-purple-900">
                {workout.name}
              </span>
              <span className="text-sm text-gray-600">
                {workout.type} &middot; {workout.duration} min
              </span>
              <span className="text-xs text-gray-400">[{workout.source}]</span>
              <span className="text-xs text-gray-500 mt-1 line-clamp-2">
                {workout.description}
              </span>
            </div>
            <button
              title="Delete"
              onClick={() => onDeleteWorkout(workout.id)}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-1"
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
    </div>
  );
};

// Workout Detail Component
const WorkoutDetail = ({ workout, onBack }) => {
  if (!workout) return null;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg mb-6 animate-fade-in">
      <button
        className="mb-4 text-purple-700 hover:underline flex items-center"
        onClick={onBack}
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to list
      </button>
      <h3 className="text-2xl font-bold text-purple-900 mb-2">
        {workout.name}
      </h3>
      <div className="flex flex-wrap gap-4 mb-2">
        <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          {workout.type}
        </span>
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          {workout.duration} mins
        </span>
        <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
          {workout.source}
        </span>
      </div>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span>{" "}
        {workout.description || (
          <span className="italic text-gray-400">No description</span>
        )}
      </p>
    </div>
  );
};

// Custom Workout Form
const WorkoutForm = ({ onWorkoutAdded, isSignedIn }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    duration: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.duration) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    axios
      .post("https://api.example.com/fit-tracker/workouts", form)
      .then(() => {
        setLoading(false);
        setForm({ name: "", type: "", duration: "", description: "" });
        if (onWorkoutAdded) onWorkoutAdded();
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to add workout. Try again.");
      });
  };

  if (!isSignedIn) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gradient-to-br from-purple-100 to-white rounded-2xl shadow-lg mb-8 max-w-2xl mx-auto"
    >
      <h3 className="text-xl font-bold text-purple-800 mb-4">
        Add Custom Workout
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Workout Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Workout Name"
            value={form.name}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="type"
            placeholder="Type (e.g., Cardio, Strength)"
            value={form.type}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (minutes)<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={form.duration}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
            min={1}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border border-purple-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            rows={2}
          />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold shadow mt-2 transition"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Workout"}
      </button>
    </form>
  );
};

// Combined Feature Component
const WorkoutsFeature = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  const { isSignedIn } = useGoogleAuth();

  // Delete workout feature
  const handleDeleteWorkout = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this workout? This action cannot be undone."
      )
    ) {
      try {
        await axios.delete(
          `https://api.example.com/fit-tracker/workouts/${id.replace(
            "backend-",
            ""
          )}`
        );
        setRefreshFlag((f) => f + 1);
        if (selectedWorkout && selectedWorkout.id === id)
          setSelectedWorkout(null);
      } catch {
        alert("Failed to delete workout.");
      }
    }
  };

  const handleWorkoutAdded = () => {
    setRefreshFlag((f) => f + 1);
  };

  const handleBack = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-white py-8 px-2">
      <div className="w-full max-w-5xl mx-auto">
        <WorkoutForm onWorkoutAdded={handleWorkoutAdded} isSignedIn={true} />
        {selectedWorkout ? (
          <WorkoutDetail workout={selectedWorkout} onBack={handleBack} />
        ) : (
          <WorkoutsList
            onSelectWorkout={setSelectedWorkout}
            refreshFlag={refreshFlag}
            isSignedIn={true}
            onDeleteWorkout={handleDeleteWorkout}
          />
        )}
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
        .animate-fade-in {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default WorkoutsFeature;
