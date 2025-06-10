import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto w-full">
    <div className="w-full max-w-full px-4 min-h-[30vh] flex flex-col justify-between">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <span className="ml-2 text-xl font-bold">Company</span>
          <p className="text-gray-400">
            Track your nutrition and fitness goals with our comprehensive app.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-400 hover:text-white transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <address className="not-italic text-gray-400">
            <p>Lagos, Nigeria</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Kelechukwu508@gmail.com"
                className="hover:text-white"
              >
                Kelechukwu508@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+2347039422404" className="hover:text-white">
                +2347039422404
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons - Left Side */}
        <div className="flex space-x-6 mb-4 md:mb-0 md:order-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mb-4 md:mb-0 md:order-2 text-center">
          © 2025 All Rights Reserved. Built by Kelechukwu Ifeanyichukwu Aku.
        </p>

        {/* Footer Navigation Links - Right Side */}
        <div className="flex space-x-6 md:order-3">
          <Link
            to="/privacy-policy"
            className="text-gray-500 hover:text-white text-sm transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-gray-500 hover:text-white text-sm transition"
          >
            Terms of Service
          </Link>
          <Link
            to="/cookies"
            className="text-gray-500 hover:text-white text-sm transition"
          >
            Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
