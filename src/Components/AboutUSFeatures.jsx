import React from "react";

// Reusable Card Component
const Card = ({ title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const AboutUSFeatures = () => {
  const features = [
    {
      title: "Comprehensive Tracking",
      description:
        "Log your meals, workouts, and daily activities with ease. Monitor your progress and stay motivated.",
    },
    {
      title: "Personalized Plans",
      description:
        "Get custom workout and nutrition plans tailored to your goals, whether you want to lose weight, build muscle, or stay healthy.",
    },
    {
      title: "Community Support",
      description:
        "Join challenges, connect with others, and celebrate your achievements together in our supportive community.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        About Us
      </h2>
      <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        Fit Tracker App helps you achieve your health and fitness goals by
        providing powerful tools for tracking nutrition, workouts, and
        progress—all in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default AboutUSFeatures;
