"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const PromoModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Ensure the modal root exists when the component is mounted
        const modalElement = document.getElementById("modal-root");
        if (!modalElement) {
            // Dynamically create a modal root if it doesn't exist
            const newModalRoot = document.createElement("div");
            newModalRoot.setAttribute("id", "modal-root");
            document.body.appendChild(newModalRoot);
            setModalRoot(newModalRoot);
        } else {
            setModalRoot(modalElement);
        }
    }, []);

    useEffect(() => {
        // Apply overflow-hidden to the body when the modal is open
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            // Cleanup the class on component unmount
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleCheckboxChange = () => {
        setDontShowAgain(!dontShowAgain);
        // Save the preference to localStorage or a cookie
    };

    if (!isOpen || !modalRoot) return null;

    const modalContent = (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[200] backdrop-blur-sm">
            <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-screen-md p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={handleClose}
                >
                    <i className="fas fa-times text-lg"></i>
                </button>

                {/* Modal Image */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736828640/an20241227100422624_axwuyx.webp"
                    alt="CNY Angpao Rain"
                    className="w-full object-cover rounded-t-lg"
                />

                {/* Modal Title */}
                <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
                    CNY ANGPAO RAIN!
                </h2>

                {/* Modal Content */}
                <p className="text-center text-gray-600 mt-2">
                    Gong Xi Fa Cai! Get active NOW and stand a chance to win a random prosperity
                    angpao up to MYR 888 this Chinese New Year!
                </p>

                {/* "Don't Show Again" Option */}
                <div className="flex items-center justify-center mt-4">
                    <input
                        type="checkbox"
                        id="dont-show-again"
                        className="mr-2"
                        checked={dontShowAgain}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="dont-show-again" className="text-gray-600">
                        Don't Show Again
                    </label>
                </div>
            </motion.div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, modalRoot);
};

export default PromoModal;
