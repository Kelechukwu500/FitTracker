import React from "react";

const CookiesFeatures = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Cookies Notice
        </h2>
        <p className="text-gray-600 mb-4">
          We use cookies to improve your experience, analyze site traffic, and
          deliver personalized content. By using our site, you consent to our
          use of cookies in accordance with our Cookie Policy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Essential Cookies
            </h3>
            <p className="text-sm text-gray-600">
              Required for core functionality like logging in and saving your
              fitness data.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Analytics Cookies
            </h3>
            <p className="text-sm text-gray-600">
              Help us understand how users interact with the app to improve
              performance and usability.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Marketing Cookies
            </h3>
            <p className="text-sm text-gray-600">
              Used to deliver relevant ads and measure campaign effectiveness
              (optional).
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              Preference Cookies
            </h3>
            <p className="text-sm text-gray-600">
              Remember your preferences such as dark mode or language selection.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Accept All
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition">
            Manage Preferences
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookiesFeatures;
// 