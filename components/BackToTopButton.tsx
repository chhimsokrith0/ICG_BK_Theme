"use client";

import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <div
                className="back-top-box fixed bottom-40 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50"
                onClick={scrollToTop}
                aria-label="Back to Top"
            >
                <svg
                    width="24px"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.626 11.323"
                >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        className="st0"
                        d="M0.00001,10.06726c0-0.33301,0.12988-0.64746,0.36719-0.88379l8.64453-8.64453  c0.34668-0.34863,0.80859-0.53906,1.30176-0.53906c0.49121,0,0.95215,0.19141,1.29883,0.54004l8.64551,8.64355  c0.2373,0.23633,0.36816,0.55078,0.36816,0.88477c0,0.33496-0.13086,0.64941-0.36816,0.88672s-0.55273,0.36816-0.88867,0.36816  c-0.33398-0.00098-0.64844-0.13086-0.88477-0.36719l-8.1709-8.17188l-8.1709,8.1709  c-0.48926,0.48926-1.28516,0.48926-1.77637-0.00098C0.12989,10.71863,0.00001,10.4032,0.00001,10.06726z"
                        fill="#FFFFFF"
                    ></path>
                </svg>
            </div>
        )
    );
};

export default BackToTopButton;
