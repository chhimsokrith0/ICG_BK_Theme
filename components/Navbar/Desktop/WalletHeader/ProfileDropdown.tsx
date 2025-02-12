"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Wallet, Gift, User, History } from "lucide-react"

const ProfileDropdown = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [expandedSection, setExpandedSection] = useState("CASHIER")

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? "" : section)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Profile Icon */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
            alt="Profile"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isHovered && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-4">
          {/* User Information */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Hi, ssaighuy7y8sh</p>
              <div className="flex items-center space-x-1">
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">&gt;100</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>Your VIP tier is</span>
              <span className="text-blue-500">NORMAL</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>0</span>
              <span>15000</span>
            </div>
            <div className="relative h-1.5 bg-gray-200 rounded-full mb-2">
              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full border-2 border-white ${i === 0 ? "bg-blue-500" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <button className="text-xs text-blue-500 hover:underline">View More &gt;</button>
          </div>

          {/* KYC Level */}
          <div className="flex items-center justify-between mb-4 p-2 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">KYC Level</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm">0/1</span>
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="space-y-2">
            {/* Cashier Section */}
            <div>
              <button
                onClick={() => toggleSection("CASHIER")}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <Wallet className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">CASHIER</span>
                </div>
                {expandedSection === "CASHIER" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSection === "CASHIER" && (
                <div className="pl-8 py-2 space-y-2">
                  <button className="text-sm text-gray-600 hover:text-blue-500 block">Deposit</button>
                  <button className="text-sm text-gray-600 hover:text-blue-500 block">Withdraw</button>
                  <button className="text-sm text-gray-600 hover:text-blue-500 block">Transfer / Promo</button>
                  <button className="text-sm text-gray-600 hover:text-blue-500 block">Withdrawal Details</button>
                </div>
              )}
            </div>

            {/* Reward Section */}
            <div>
              <button
                onClick={() => toggleSection("REWARD")}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">REWARD</span>
                </div>
                {expandedSection === "REWARD" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Profile Section */}
            <div>
              <button
                onClick={() => toggleSection("PROFILE")}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">PROFILE</span>
                </div>
                {expandedSection === "PROFILE" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* History Section */}
            <div>
              <button
                onClick={() => toggleSection("HISTORY")}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <History className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">HISTORY</span>
                </div>
                {expandedSection === "HISTORY" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown

