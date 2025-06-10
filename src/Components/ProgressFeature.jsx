import React, { useState } from "react";

// ProgressChart component with improved style and tooltips
const ProgressChart = ({ data, label }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow mb-6 w-full">
    <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
      {label} Progress
    </h3>
    <div className="flex items-end h-56 w-full gap-2 overflow-x-auto">
      {data.map((point, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center group"
          style={{ flex: 1, minWidth: 40 }}
        >
          {/* Tooltip */}
          <div className="mb-2 opacity-0 group-hover:opacity-100 transition bg-purple-700 text-white text-xs rounded px-2 py-1 absolute z-10">
            {point.date}: {point.value}
          </div>
          <div
            style={{
              height: `${Math.max(10, (point.value - getMin(data)) * 30)}px`,
              background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
              borderRadius: 8,
              width: 24,
              transition: "height 0.3s",
              position: "relative",
            }}
            className="shadow-md cursor-pointer"
            title={`${point.date}: ${point.value}`}
          />
          <div className="text-xs text-gray-500 mt-2">
            {point.date.slice(5)}
          </div>
        </div>
      ))}
    </div>
    {/* Line for min/max */}
    <div className="flex justify-between mt-2 text-xs text-gray-400">
      <span>Min: {getMin(data)}</span>
      <span>Max: {getMax(data)}</span>
    </div>
  </div>
);

// Helper functions for min/max
function getMin(data) {
  return Math.min(...data.map((d) => d.value));
}
function getMax(data) {
  return Math.max(...data.map((d) => d.value));
}

// ProgressTable for history
const ProgressTable = ({ data }) => (
  <div className="overflow-x-auto mb-6">
    <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left text-purple-700 dark:text-purple-300">
            Date
          </th>
          <th className="py-2 px-4 text-left text-purple-700 dark:text-purple-300">
            Value (kg)
          </th>
        </tr>
      </thead>
      <tbody>
        {data
          .slice()
          .reverse()
          .map((point, idx) => (
            <tr key={idx} className="hover:bg-purple-50 dark:hover:bg-gray-700">
              <td className="py-2 px-4">{point.date}</td>
              <td className="py-2 px-4">{point.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

// ProgressSummary for stats
const ProgressSummary = ({ data }) => {
  if (data.length < 2) return null;
  const start = data[0].value;
  const end = data[data.length - 1].value;
  const diff = (end - start).toFixed(1);
  return (
    <div className="mb-6 p-4 bg-purple-50 dark:bg-gray-700 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-bold text-lg text-purple-700 dark:text-purple-300">
          Start:
        </span>{" "}
        <span className="text-gray-700 dark:text-gray-200">{start} kg</span>
      </div>
      <div>
        <span className="font-bold text-lg text-purple-700 dark:text-purple-300">
          Current:
        </span>{" "}
        <span className="text-gray-700 dark:text-gray-200">{end} kg</span>
      </div>
      <div>
        <span className="font-bold text-lg text-purple-700 dark:text-purple-300">
          Change:
        </span>{" "}
        <span
          className={
            diff < 0
              ? "text-green-600"
              : diff > 0
              ? "text-red-600"
              : "text-gray-700"
          }
        >
          {diff > 0 ? "+" : ""}
          {diff} kg
        </span>
      </div>
    </div>
  );
};

const ProgressFeature = () => {
  // Example: tracking weight over time
  const [progressData, setProgressData] = useState([
    { date: "2025-05-01", value: 70 },
    { date: "2025-05-08", value: 69 },
    { date: "2025-05-15", value: 68.5 },
    { date: "2025-05-22", value: 68 },
  ]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input) return;
    setProgressData([
      ...progressData,
      {
        date: new Date().toISOString().split("T")[0],
        value: parseFloat(input),
      },
    ]);
    setInput("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-2">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-700 dark:text-purple-300">
        Progress Tracker
      </h2>
      <form
        onSubmit={handleAdd}
        className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-center"
      >
        <input
          type="number"
          step="0.1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new weight (kg)"
          className="border border-purple-300 dark:border-purple-700 p-3 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Add Progress
        </button>
      </form>
      <ProgressSummary data={progressData} />
      <ProgressChart data={progressData} label="Weight (kg)" />
      <ProgressTable data={progressData} />
    </div>
  );
};

export default ProgressFeature;
