"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const PinCodeModal = ({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Define modal animations
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  // Avoid rendering if modal is not open
  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white rounded-lg shadow-lg"
        style={{
          width: "800px",
          height: "350px",
          padding: "36px",
        }}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">
            Create 6 Digit Pin Code:
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form>
          {/* Pin Input */}
          <label className="block mb-4 relative">
            <span className="text-gray-700 font-medium">
              Please Enter 6 Digit PIN Code
            </span>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter 6 Digit Pin"
                className="w-full mt-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
          </label>

          <label className="block mb-4 relative">
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm 6 Digit Pin"
                className="w-full mt-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
          </label>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>,
    document.body
  );
};

export default PinCodeModal;
