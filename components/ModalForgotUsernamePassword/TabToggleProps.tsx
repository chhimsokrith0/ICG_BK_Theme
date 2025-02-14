import type * as React from "react"
import { cn } from "@/lib/utils"

interface TabToggleProps {
  isMobileSelected: boolean
  setIsMobileSelected: (value: boolean) => void
}

const TabToggle: React.FC<TabToggleProps> = ({ isMobileSelected, setIsMobileSelected }) => {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      <TabButton isSelected={isMobileSelected} onClick={() => setIsMobileSelected(true)}>
        Mobile
      </TabButton>
      <TabButton isSelected={!isMobileSelected} onClick={() => setIsMobileSelected(false)}>
        Email
      </TabButton>
    </div>
  )
}

interface TabButtonProps {
  isSelected: boolean
  onClick: () => void
  children: React.ReactNode
}

const TabButton: React.FC<TabButtonProps> = ({ isSelected, onClick, children }) => {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-full font-medium transition-all",
        isSelected ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-800 hover:bg-gray-200",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TabToggle