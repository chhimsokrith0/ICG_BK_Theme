// CustomArrow.tsx
import React from "react";

interface CustomArrowProps {
    direction: 'left' | 'right';
}

const CustomArrow: React.FC<CustomArrowProps> = ({ direction }) => (
    <button
        className={`bg-gradient-to-${direction === "left" ? "r from-blue-600 to-purple-600" : "l from-blue-600 to-purple-600"} text-white rounded-full p-3 shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out absolute ${direction === "left" ? "-left-4" : "-right-4"} top-1/2 transform -translate-y-1/2 z-10`}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
            <path
                fillRule="evenodd"
                d={direction === "left" ? "M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 011.414 1.414L9.414 11l3.293 3.293a1 1 0 010 1.414z" 
                : "M7.293 4.293a1 1 0 011.414 0L13.414 9l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 9 7.293 5.707a1 1 0 010-1.414z"}
                clipRule="evenodd"
            />
        </svg>
    </button>
);

export default CustomArrow;
