import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Workouts from "./Pages/Workouts";
import Nutrition from "./Pages/Nutrition";
import Progress from "./Pages/Progress";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Profile from "./Authentication/Profile";
import AboutUs from "./FooterPages/AboutUs";
import Blog from "./FooterPages/Blog";
import Cookies from "./FooterPages/Cookies";
import PrivacyPolicy from "./FooterPages/PrivacyPolicy";
import Pricing from "./FooterPages/Pricing";
import TermsofService from "./FooterPages/TermsofService";
import BlogId from "./FooterPages/BlogId";




const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-16">
        <div className="container mx-auto px-4">
          

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/terms-of-service" element={<TermsofService />} />
            <Route path="/blog/:id" element={<BlogId />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
