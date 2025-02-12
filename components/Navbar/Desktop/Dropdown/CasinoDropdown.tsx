"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslations } from "next-intl"

interface SportsOption {
  name: string
  image: string
  badge?: string
}

export default function CasinoDropdown() {
  const t = useTranslations("Dropdown.casinoDropdown")
  const SportsOptions = t.raw("sportsOptions") as SportsOption[]
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const sportsOptions = SportsOptions.map((sportsOption) => ({
    name: sportsOption.name,
    image: sportsOption.image,
    badge: sportsOption.badge,
  }))

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isHovered && dropdownRef.current) {
        e.preventDefault()
        dropdownRef.current.scrollLeft += e.deltaY
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [isHovered])

  return (
    <div className="w-full bg-[#1a237e] bg-opacity-95">
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-8 gap-0.5">
            {sportsOptions.map((option: any, index: number) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center space-y-2 text-white hover:scale-105 transition-all duration-300 p-2 rounded-lg cursor-pointer"
                >
                    <div className="w-full max-w-[95px] aspect-[4/5]">
                        <img
                            src={option.image || "/placeholder.svg"}
                            alt={option.name}
                            className="w-full h-full rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="font-medium text-white text-center text-sm mt-2">{option.name}</div>
                    {option.badge && (
                        <span
                            className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${option.badge === "Hot" ? "bg-red-500 text-white" : "bg-yellow-500 text-black"
                                }`}
                        >
                            {option.badge}
                        </span>
                    )}
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

