"use client";

import React from "react";

const ESports = () => {
  const cards = [
    {
      title: "TFGAMING",
      image:
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736172845/e-sport1_cmzaht.png", // Replace with your image URL
      label: "Hot",
      labelClass: "bg-orange-500",
    },
    {
      title: "ESPORTS",
      image:
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736172845/e-sport2_zyuiav.png", // Replace with your image URL
      label: "New",
      labelClass: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-full rounded-lg overflow-hidden"
        >
          {/* Badge */}
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${card.labelClass}`}
          >
            {card.label}
          </div>
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          {/* Title */}
          <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 py-1 px-2 rounded-md shadow-sm">
            <p className="text-center text-sm font-medium text-gray-800">
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ESports;
