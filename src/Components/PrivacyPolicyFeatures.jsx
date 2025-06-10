import React from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
  </div>
);

const PrivacyPolicyFeatures = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your data when you use our fitness tracking
          app.
        </p>

        <Card title="1. Information We Collect">
          We may collect personal information such as your name, email address,
          age, fitness goals, workout logs, and nutrition data to help
          personalize your fitness journey.
        </Card>

        <Card title="2. How We Use Your Information">
          We use your data to provide personalized workout and nutrition plans,
          track your progress, send updates, and improve our services.
        </Card>

        <Card title="3. Data Sharing & Security">
          We never sell your data. Your information is stored securely and may
          be shared only with third-party services we trust to improve the app
          (analytics, authentication, etc.).
        </Card>

        <Card title="4. Cookies & Tracking Technologies">
          We use cookies for essential features and analytics to enhance your
          experience. You can manage your cookie preferences in settings.
        </Card>

        <Card title="5. Your Rights">
          You can request to view, edit, or delete your personal information at
          any time by contacting our support team.
        </Card>

        <Card title="6. Policy Updates">
          We may update this policy occasionally. You’ll be notified of
          significant changes via email or in-app alerts.
        </Card>

        <div className="text-center mt-10 text-sm text-gray-500">
          Last Updated: May 26, 2025
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyFeatures;
