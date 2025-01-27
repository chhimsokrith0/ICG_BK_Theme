"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NavbarMobile = ({ locale }: { locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadPopupVisible, setIsDownloadPopupVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeDownloadPopup = () => {
    setIsDownloadPopupVisible(false);
  };
  

  return (
    <nav className="mobile-navbar bg-white shadow-md fixed top-0 left-0 w-full z-50 sticky top-0 lg:z-[200]">
      {/* Download Section */}
      <AnimatePresence>
        {isDownloadPopupVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200"
          >
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
                alt="BK8 Logo"
                className="h-10 rounded-md"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  BK8 App Download
                </p>
                <p className="text-xs text-gray-600">Download App version Now</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg font-medium shadow hover:bg-blue-600 transition"
                onClick={() => alert("Redirecting to download page...")}
              >
                Download
              </button>
              <button
                className="ml-3 text-gray-500 hover:text-gray-800 transition"
                aria-label="Close"
                onClick={closeDownloadPopup}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Hamburger Menu */}
        <button
          className="hamburger-menu flex flex-col space-y-1 w-6 h-6"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="block w-full h-1 bg-blue-500 rounded transition-all duration-300"></span>
          <span
            className={`block w-full h-1 bg-blue-500 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-blue-500 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>

        {/* Logo */}
        <div className="logo flex items-center space-x-2">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
              alt="BK8 Logo"
              className="h-10 rounded-md"
            />
          </Link>
        </div>

        {/* App Notification Icon */}
        <Link href="/download" className="app-icon relative">
          <img
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737954501/online-strategy_yxfq63.gif"
            alt="App Icon"
            className="h-10"
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </Link>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMobile;
