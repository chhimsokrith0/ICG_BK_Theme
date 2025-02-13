"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion } from "framer-motion"

const BackgroundImageSection = () => {
  const t = useTranslations("vip.BackgroundImageSection")
  const isMobile = useMediaQuery("(max-width: 640px)")

  const navigationItems = [
    { href: "#about", label: t("navigation.about"), primary: true },
    { href: "#upgrade", label: t("navigation.upgrade") },
    { href: "#benefits", label: t("navigation.benefits") },
    { href: "#faq", label: t("navigation.faq") },
    { href: "#referral", label: t("navigation.referral") },
  ]

  return (
    <div className="relative min-h-[337px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-screen w-full">
      <Image
        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737192276/top-banner_mb0hvr.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />

      <div className="relative flex flex-col justify-between min-h-[337px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-screen p-6 md:p-16 lg:p-24 xl:p-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-white space-y-4 md:space-y-6 lg:space-y-8"
        >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium uppercase tracking-wider">
            {t("title")}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">{t("mainTitle")}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">{t("description")}</p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-8"
        >
          {navigationItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition text-sm sm:text-base md:text-lg ${
                item.primary
                  ? "bg-yellow-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-yellow-500 shadow-lg hover:shadow-xl"
                  : "text-gray-300 hover:text-white border-b-2 border-transparent hover:border-yellow-600"
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

