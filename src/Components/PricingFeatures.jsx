import React from "react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Track workouts and meals",
      "Access to community",
      "Basic progress reports",
    ],
    buttonText: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: "#10,000/monthly",
    features: [
      "Everything in Basic",
      "Personalized fitness plans",
      "Nutrition tracking & recommendations",
      "Goal setting and reminders",
    ],
    buttonText: "Join Now",
    highlight: true,
  },
  {
    name: "Elite",
    price: "#25,000/monthly",
    features: [
      "Everything in Pro",
      "1-on-1 coaching sessions",
      "Advanced analytics & reports",
      "Priority customer support",
    ],
    buttonText: "Join Now",
    highlight: true,
  },
];

const PricingFeatures = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-6 transition hover:shadow-xl ${
              plan.highlight
                ? "border-2 border-blue-600 bg-blue-50"
                : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              {plan.name}
            </h3>
            <p className="text-center text-3xl font-bold text-blue-600 mb-4">
              {plan.price}
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-green-600 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                className={`px-6 py-2 rounded font-medium transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingFeatures;
