import React, { useState } from "react";

const MessageDropdown = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="relative">
                <div className="w-10 h-10 bg-white rounded-full border border-blue-500 flex items-center justify-center">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554069/email-file_zpdjcv.gif"
                        alt="Message Icon"
                        className="w-6 h-6"
                    />
                </div>
            </button>
            {isHovered && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-48">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <span className="text-sm text-gray-700">Promotions</span>
                        <span className="text-sm text-gray-500">0</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <span className="text-sm text-gray-700">Payment</span>
                        <span className="text-sm text-gray-500">0</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <span className="text-sm text-gray-700">System</span>
                        <span className="text-sm text-gray-500">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Notification</span>
                        <span className="text-sm text-gray-500">0</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessageDropdown;
