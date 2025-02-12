"use client"

import { useState } from "react"

const MessageDropdown = () => {
  const [isHovered, setIsHovered] = useState(false)

  const menuItems = [
    { label: "Promotions", count: 0 },
    { label: "Payment", count: 0 },
    { label: "System", count: 0 },
    { label: "Notification", count: 0 },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="relative">
        <div className="w-8 h-8 bg-white rounded-full border border-blue-500 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554069/email-file_zpdjcv.gif"
            alt="Message"
            className="w-5 h-5"
          />
        </div>
      </button>

      {isHovered && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-50">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-2 flex justify-between items-center hover:bg-gray-50 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className="text-sm text-gray-400">{item.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MessageDropdown

