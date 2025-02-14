"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useTranslations } from "next-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const BestLiveCasinoGames = () => {
  const t = useTranslations("Games.BestLiveCasinoGames")
  const { data: session } = useSession()
  const gamesList = t.raw("GamesList")
  const games = gamesList.map((game: any) => ({
    id: game.id,
    name: game.name,
    type: game.type,
    image: game.image,
    label: game.label,
    link: game.link,
  }))

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
  }

  const GameCard = ({ game, index }: { game: any; index: number }) => (
    <motion.div
      key={game.id}
      className="game-container px-2"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="game-img-wrapper relative group overflow-hidden rounded-xl shadow-lg">
        <img
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          className="w-full h-[160px] object-cover transition-transform transform group-hover:scale-105 duration-300"
        />
        {game.label && (
          <div
            className={`absolute top-2 right-2 ${game.label === "New" ? "bg-red-500" : "bg-orange-500"} text-white px-2 py-0.5 rounded-md text-xs font-medium`}
          >
            {game.label}
          </div>
        )}
        <div className="btn-container absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {session ? (
            <Link href={game.link}>
              <button className="bg-white text-black w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className="bg-gray-400 text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="game-content mt-3 px-1">
        <h3 className="text-base font-semibold text-gray-900 mb-0.5">{game.name}</h3>
        <p className="text-sm text-gray-500">{game.type}</p>
      </div>
    </motion.div>
  )

  return (
    <motion.section
      className="best-live-casino-section mx-auto max-w-[1400px] px-4 md:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">{t("bestLiveCasinoGamesTitle")}</h2>
        <Link href="/Games/casino/evolution-gaming" className="text-sm text-gray-600 hover:text-gray-900">
          {t("seeAll")}
        </Link>
      </div>

      {isMobile ? (
        <div className="flex overflow-x-auto space-x-4 -mx-4 px-4 scrollbar-hide">
          {games.map((game: any, index: number) => (
            <div key={game.id} className="flex-none w-[180px]">
              <GameCard game={game} index={index} />
            </div>
          ))}
        </div>
      ) : (
        <Slider
          autoplay
          autoplaySpeed={5000}
          infinite
          speed={500}
          slidesToShow={6}
          slidesToScroll={1}
          arrows={false}
          responsive={[
            { breakpoint: 1400, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
          ]}
        >
          {games.map((game: any, index: number) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </Slider>
      )}
    </motion.section>
  )
}

export default BestLiveCasinoGames

