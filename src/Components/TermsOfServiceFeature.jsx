import React from "react";

// Reusable Card Component
const Card = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
  </div>
);

const TermsOfServiceFeature = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Terms of Service
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Please read these terms carefully before using the Fit Tracker App. By
          accessing or using our services, you agree to be bound by these terms.
        </p>

        <Card title="1. Acceptance of Terms">
          By creating an account or using the app, you agree to follow these
          Terms of Service. If you do not agree, you may not use our services.
        </Card>

        <Card title="2. User Responsibilities">
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activities that occur under your account.
        </Card>

        <Card title="3. Use of the App">
          You may use the app for personal fitness tracking purposes. You may
          not use it for illegal or unauthorized activities, including
          distributing harmful content or violating others' rights.
        </Card>

        <Card title="4. Health Disclaimer">
          The app provides general fitness and nutritional advice. It is not a
          substitute for professional medical advice. Always consult a doctor
          before starting a new fitness regimen.
        </Card>

        <Card title="5. Subscription & Payments">
          Certain features may require a paid subscription. Prices, billing
          cycles, and refund policies will be clearly stated during the
          subscription process.
        </Card>

        <Card title="6. Termination of Use">
          We reserve the right to suspend or terminate accounts that violate
          these terms or engage in harmful behavior.
        </Card>

        <Card title="7. Modifications">
          We may update these terms occasionally. Continued use of the app after
          changes means you accept the new terms.
        </Card>

        <Card title="8. Contact Us">
          For any questions or concerns about these terms, you can reach us at
          Kelechukwu508@gmail.com
        </Card>

        <div className="text-center mt-10 text-sm text-gray-500">
          Last Updated: May 26, 2025
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceFeature;
