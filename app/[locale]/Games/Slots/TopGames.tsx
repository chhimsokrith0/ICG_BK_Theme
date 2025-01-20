"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const games: Game[] = [
    {
      id: 1,
      title: "Pac-Man's Glory",
      provider: "Nextspin",
      rtp: "96.95",
      image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/sPac_Man1_soexjf.png",
      isNew: true,
      demoLink:
        "https://play.2umdjcuk.com/gen3/sPac_Man1/202411250258/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sPac_Man1&language=en_US",
    },
    {
      id: 2,
      title: "Giant Tossakan",
      provider: "Nextspin",
      rtp: "96.92",
      image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/sHG0001_hfxll3.png",
      isNew: true,
      demoLink:
        "https://play.2umdjcuk.com/gen3/sHG0001/202501030931/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sHG0001&language=en_US",
    },
    {
      id: 3,
      title: "Legend of Guan...",
      provider: "Nextspin",
      rtp: "96.99",
      image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768339/sAztecGolT_tphxsz.png",
      isNew: true,
      demoLink:
        "https://play.2umdjcuk.com/gen3/sGuanGong/202412260744/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sGuanGong&language=en_US",
    },
    {
      id: 4,
      title: "Mahjong Phoenix",
      provider: "Nextspin",
      rtp: "96.94",
      image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/sMahPhe_nu5z8k.png",
      isNew: true,
      demoLink:
        "https://play.2umdjcuk.com/gen3/sMahPhe/202411250241/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sMahPhe&language=en_US",
    },
    {
      id: 5,
      title: "Aztec Gold Trea...",
      provider: "Nextspin",
      rtp: "96.98",
      image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768339/sGuanGong_yq96ix.png",
      isNew: true,
      demoLink:
        "https://play.2umdjcuk.com/gen3/sAztecGolT/202411250226/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sAztecGolT&language=en_US",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left px-4">
        Top Games
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
                    New
                  </span>
                )}

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mb-2">
                    Play
                  </button>
                  <Link
                    href={game.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center block"
                  >
                    Demo
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
                    RTP {game.rtp}
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
