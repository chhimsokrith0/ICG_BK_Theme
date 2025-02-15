"use client"

import type React from "react"
import { useState } from "react"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"

const BackgroundImageSection = () => {
  const t = useTranslations("vip.BackgroundImageSection")
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const navigationItems = [
    { href: "#about", label: t("navigation.about"), primary: true },
    { href: "#upgrade", label: t("navigation.upgrade") },
    { href: "#benefits", label: t("navigation.benefits") },
    { href: "#faq", label: t("navigation.faq") },
    { href: "#referral", label: t("navigation.referral") },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setActiveItem(href)
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - (isMobile ? 60 : 100),
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={`relative ${isMobile ? "w-[430px] h-[337px]" : ""}`}>
      <div className="absolute inset-0">
        {/* Mobile Image */}
        <div className={`${isMobile ? "block" : "hidden"}relative`}>
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1739602534/m-vip-banner_htbuor.jpg"
            alt="Background"
            fill
            priority
            sizes={isMobile ? "430px" : "337px"}
            quality={100}
            className="object-cover object-center"
          />
        </div>
        {/* Desktop Image */}
        <div className={`${isMobile ? "hidden" : "block"} w-full h-full relative`}>
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737192276/top-banner_mb0hvr.jpg"
            alt="Background"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

      <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 md:p-16 lg:p-24 xl:p-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-white space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
        >
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium uppercase tracking-wider">
            {t("title")}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
            {t("mainTitle")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">{t("description")}</p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-6 sm:mt-8"
        >
          {navigationItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition text-xs sm:text-sm md:text-base lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 rounded-full ${
                item.primary
                  ? "bg-yellow-600 text-white hover:bg-yellow-500 shadow-lg hover:shadow-xl"
                  : activeItem === item.href
                    ? "bg-white/20 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </div>
  )
}

export default BackgroundImageSection

