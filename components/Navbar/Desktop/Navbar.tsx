
"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import axiosRetry from "axios-retry"
import ButtonMenuSvg from "./ButonMenu"
import LanguageDropdown from "./LanguageDropdown"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import WalletHeader from "./WalletHeader/WalletHeader"

export default function Navbar({ locale }: { locale: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [dateTime, setDateTime] = useState<string>("") // To store the date and time
    const [timezone, setTimezone] = useState<string>("UTC") // To store the user's timezone
    const t = useTranslations("navbar")
    const { data: session } = useSession()

    const handleMenuToggle = () => {
        setIsMenuClicked(!isMenuClicked)
        setIsMenuOpen(false) // Close hover menu if toggle is clicked
    }

    axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

    // Fetch timezone from the internal API
    useEffect(() => {
        const fetchTimezone = async () => {
            try {
                const response = await axios.get("/api/timezone")
                const { timezone } = response.data
                setTimezone(timezone)
            } catch (error) {
                console.error("Failed to fetch timezone:", error instanceof Error ? error.message : "Unknown error")
                setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone) // Fallback to browser timezone
            }
        }

        fetchTimezone()
    }, []) // ✅ Runs only on mount

    // Timer to update date and time every second
    useEffect(() => {
        const timer = setInterval(() => {
            const localDate = new Date().toLocaleString("en-US", {
                timeZone: timezone,
                weekday: "short",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
            setDateTime(localDate)
        }, 1000) // Update every second

        return () => clearInterval(timer) // Cleanup interval on component unmount
    }, [timezone])

    return (
        <div className="bg-gradient-to-r from-blue-100 w-full via-white to-blue-100 shadow-md">
            {/* Main Navbar */}
            <nav className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-wrap items-center justify-between ">
                {/* Left Section */}
                <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 relative">
                    {/* Menu Button for Mobile */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => !isMenuClicked && setIsMenuOpen(false)}
                    >
                        <button
                            onClick={handleMenuToggle}
                            className={`text-gray-700 mt-4 focus:outline-none transition-colors duration-200 ${isMenuClicked || isMenuOpen ? "text-blue-500" : "hover:text-blue-500"
                                }`}
                            aria-label="Toggle Menu"
                        >
                            <ButtonMenuSvg />
                        </button>

                        {/* Hover Menu */}
                        {(isMenuOpen || isMenuClicked) && (
                            <div
                                className="absolute top-full left-0"
                                onMouseEnter={() => setIsMenuOpen(true)}
                                onMouseLeave={() => !isMenuClicked && setIsMenuOpen(false)}
                            >
                                <MobileMenu
                                    closeMenu={() => {
                                        setIsMenuClicked(false)
                                        setIsMenuOpen(false)
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* BK8 Logo */}
                    <Link href="/">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
                            alt="BK8 Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <DesktopMenu locale={locale} />
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Date and Time */}
                    <div className="hidden lg:flex text-xs sm:text-sm font-medium text-gray-700 items-center space-x-2 whitespace-nowrap">
                        {dateTime || (
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="animate-spin h-4 w-4 text-blue-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                <span>Loading...</span>
                            </div>
                        )}
                    </div>

                    {session ? (
                        <WalletHeader />
                    ) : (
                        <>
                            {/* Log in Button */}
                            <Link
                                href={`/${locale}/login`}
                                className="text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700 hover:text-gray-900"
                            >
                                {t("rightMenu.Login")}
                            </Link>

                            {/* Join Now Button */}
                            <Link
                                href={`/${locale}/register`}
                                className="bg-orange-500 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-4 sm:py-2 rounded-md whitespace-nowrap hover:bg-orange-600 shadow-md"
                            >
                                {t("rightMenu.Joinnow")}
                            </Link>
                        </>
                    )}

                    {/* Language Dropdown */}
                    <LanguageDropdown />
                </div>
            </nav>
        </div>
    )
}

