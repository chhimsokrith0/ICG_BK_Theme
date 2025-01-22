import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddressModal = ({ isOpen, onClose }: AddressModalProps) => {
  useEffect(() => {
    // Add or remove the overflow-hidden class based on the modal state
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Ensure cleanup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Framer motion variants for modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800">Notification</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-center">
          <ExclamationCircleIcon className="w-20 h-20 text-red-500 mx-auto mb-4" />
          <p className="text-gray-700 font-medium mb-4">
            Unable to bind Google Authenticator. Kindly verify your email
            and/or phone number to proceed.
          </p>
          <button
            onClick={onClose}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default AddressModal;
