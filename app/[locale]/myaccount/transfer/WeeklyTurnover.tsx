import React, { useState } from "react";
import { PlusIcon, ArrowPathIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import TransferModal from "./TransferModal";

const WeeklyTurnover = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Category");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);

    const categories = [
        "All Category",
        "Sports",
        "E-Sports",
        "Casino",
        "Slots",
        "Fishing",
        "3D Games",
        "Lottery",
        "Fast Games",
    ];

    const games = [
        {
            name: "BTi-Sports",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/BK8_weccc9.png",
        },
        {
            name: "Saba-Sports",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/svgviewer-output_1_uej7kb.svg",
        },
        {
            name: "Cmd-Sports",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/svgviewer-output_2_f3uu8e.svg",
        },
        {
            name: "Sbobet-Sports",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/sb_edb85p.svg",
        },
        {
            name: "TF Gaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/svgviewer-output_hivu24.svg",
        },
        {
            name: "IM Esports",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737615500/svgviewer-output_3_mw0ukn.svg",
        },
    ];

    const GameCasinoSlotsFishing = [
        {
            name: "Evolution Gaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621764/svgviewer-output_ezmmq4.svg",
        },
        {
            name: "AE Sexy",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621761/svgviewer-output_5_gsjgtk.svg",
        },
        {
            name: "BK8 Casino",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621761/svgviewer-output_7_ivgks5.svg",
        },
        {
            name: "Pragmatic Casino",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621762/svgviewer-output_9_wplr2l.svg",
        },
        {
            name: "Asia Gaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621763/svgviewer-output_12_jeprjf.svg",
        },
        {
            name: "W Casino",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621763/svgviewer-output_11_mbe5ga.svg",
        },
        {
            name: "SA Gaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621762/svgviewer-output_10_zvz1oq.svg",
        },
        {
            name: "Dream Gaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621761/svgviewer-output_8_xormth.svg",
        },
        {
            name: "Game Play",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621760/svgviewer-output_6_a6db2q.svg",
        },
        {
            name: "Microgaming",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621760/svgviewer-output_4_bnyqgg.svg",
        },
        {
            name: "Allbet",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621760/svgviewer-output_3_voa6aa.svg",
        },
        {
            name: "WM Casino",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621760/svgviewer-output_2_vz2hxp.svg",
        },
        {
            name: "WM Casino",
            turnover: 0.0,
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737621760/svgviewer-output_1_fvdptq.svg",
        },
    ];


    const handleOpenModal = (game: any) => {
        setSelectedGame(game);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-2 ml-2">
            {/* Header Section */}
            <div className="flex items-center justify-between max-w-lg mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-700">Weekly Turnover Total</p>
                    <p className="text-blue-600 font-bold text-xl">0.00</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full bg-white shadow hover:bg-gray-200">
                        <ArrowPathIcon className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="p-2 rounded-full bg-white shadow hover:bg-gray-200">
                        <InformationCircleIcon className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full font-medium ${selectedCategory === category
                            ? "bg-orange-100 text-orange-500 border border-orange-500"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Games Section */}
            <div>
                <h3 className="font-semibold text-gray-800 text-xl mb-6">Sports / E-Sports</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {games.map((game) => (
                        <div
                            key={game.name}
                            className="border border-gray-200 rounded-lg p-6 text-center shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Game Logo */}
                            <div className="relative">
                                <div className="bg-gray-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <img
                                        src={game.img}
                                        alt={game.name}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>

                                <button
                                    onClick={() => handleOpenModal(game)}
                                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                                >
                                    <PlusIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Game Name */}
                            <p className="font-semibold text-gray-800 text-lg mb-2">{game.name}</p>

                            {/* Turnover */}
                            <p className="text-blue-600 font-bold text-xl mb-1">
                                {game.turnover.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">Weekly Turnover</p>

                            {/* Action */}
                            <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                                All In
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <br />

            <div>
                <h3 className="font-semibold text-gray-800 text-xl mb-6">Casino / Slots / Fishing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {GameCasinoSlotsFishing.map((gameCasinoSlotsFishing) => (
                        <div
                            key={gameCasinoSlotsFishing.name}
                            className="border border-gray-200 rounded-lg p-6 text-center shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Game Logo */}
                            <div className="relative">
                                <div className="bg-gray-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <img
                                        src={gameCasinoSlotsFishing.img}
                                        alt={gameCasinoSlotsFishing.name}
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>

                                <button
                                    onClick={() => handleOpenModal(gameCasinoSlotsFishing)}
                                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                                >
                                    <PlusIcon className="w-5 h-5" />
                                </button>
                            </div>
                            {/* Game Name */}
                            <p className="font-semibold text-gray-800 text-lg mb-2">{gameCasinoSlotsFishing.name}</p>
                            {/* Turnover */}
                            <p className="text-blue-600 font-bold text-xl mb-1">
                                {gameCasinoSlotsFishing.turnover.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">Weekly Turnover</p>
                            {/* Action */}
                            <div className="mt-4">
                                <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                                    All in
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <TransferModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                game={selectedGame}
            />
        </div>
    );
};

export default WeeklyTurnover;
