

"use client"

import { useState } from "react"
import Link from "next/link"
import { Wallet, ArrowLeftRight, ArrowDownToLine, History } from "lucide-react"

const ActionButtonsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const menuItems = [
    {
      label: "Deposit",
      icon: <Wallet className="w-5 h-5 text-blue-500" />,
      href: "/myaccount/deposit",
    },
    {
      label: "Transfer / Promo",
      icon: <ArrowLeftRight className="w-5 h-5 text-blue-500" />,
      href: "/transfer",
    },
    {
      label: "Withdrawal",
      icon: <ArrowDownToLine className="w-5 h-5 text-blue-500" />,
      href: "/withdrawal",
    },
    {
      label: "History",
      icon: <History className="w-5 h-5 text-blue-500" />,
      href: "/history",
    },
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-200">
        Deposit
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`
                flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200
                ${index !== menuItems.length - 1 ? "border-b border-gray-100" :     ""}
              `}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ActionButtonsDropdown

