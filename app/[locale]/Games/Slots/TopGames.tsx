"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

interface Game {
  id: number;
  title: string;
  provider: string;
  rtp: string;
  image: string;
  isNew: boolean;
  demoLink: string;
}

const TopGames: React.FC = () => {

  const t = useTranslations("Slots.TopGames");

  const games: Game[] = t.raw("games");

  const { data: session } = useSession();


  return (
    <div className="max-w-[1400px] mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left px-4">
        {t("title")}
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="relative rounded-lg overflow-hidden group flex-shrink-0 w-60"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full  object-cover rounded-lg"
                />
                {game.isNew && (
                  <span className="absolute top-6 left-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {t("labels.new")}
                  </span>
                )}

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Link href={  session ? "" : "/login"} className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mb-2">
                    {t("buttons.play")}
                  </Link>
                  <Link
                    href={game.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center block"
                  >
                    {t("buttons.demo")}
                  </Link>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="px-4 py-2">
                <h3 className="text-sm font-bold text-gray-800 truncate">
                  {game.title}
                </h3>
                <p className="text-xs text-gray-600">{game.provider}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-xs font-bold bg-blue-500 text-white px-2 py-1 rounded">
                  {t("labels.rtp")} {game.rtp}
                  </span>
                  <button className="text-gray-400 hover:text-black">
                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGames;
