"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const LuckyWheel = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: window.innerHeight - 200 }); // Bottom-left corner
    const [dragging, setDragging] = useState(false);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        event.currentTarget.dataset.offsetX = String(offsetX);
        event.currentTarget.dataset.offsetY = String(offsetY);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (dragging) {
            const offsetX = Number(event.currentTarget.dataset.offsetX);
            const offsetY = Number(event.currentTarget.dataset.offsetY);

            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;

            setPosition({
                x: Math.max(0, Math.min(newX, window.innerWidth - 200)),
                y: Math.max(0, Math.min(newY, window.innerHeight - 200)),
            });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="lucky-wheel-container fixed w-[200px] h-[200px] cursor-pointer z-[200]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Stop dragging when the mouse leaves the container
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <Link href="/lucky-wheel-landing">
                <img
                    draggable="false"
                    className="floating-lucky-wheel w-full h-full object-contain"
                    src="https://www.bk33best88.asia/public/html/default_whitelabel/shared-image/lucky_wheel/s2/floating-lucky-wheel.gif"
                    alt="floating-lucky-wheel"
                />
                <span
                    className="close-btn absolute top-0 right-0 cursor-pointer bg-black rounded-full p-1 shadow-md"
                    onClick={handleClose}
                >
                    <XMarkIcon className="w-5 h-5 text-white hover:text-white text-bold" /> {/* Adjust size & color */}
                </span>
            </Link>

        </div>
    );
};

export default LuckyWheel;
