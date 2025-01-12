"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotMatch = () => {
    const hotMatches = [
        {
            id: 1,
            league: "Turkey - Super Lig",
            time: "11/01 - 6:30pm",
            homeTeam: "Kayserispor",
            awayTeam: "Samsunspor",
            homeImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-home_gc1jsj.svg",
            awayImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-away_jymn4x.svg",
            handicap: { home: "0.25", away: "-0.25" },
            odds: { home: "-0.94", away: "0.82" },
        },
        {
            id: 2,
            league: "Turkey - 1. Lig",
            time: "11/01 - 6:30pm",
            homeTeam: "76 Igdir Belediyespor",
            awayTeam: "Fatih Karagumruk",
            homeImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-home_gc1jsj.svg",
            awayImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-away_jymn4x.svg",
            handicap: { home: "-0.25", away: "0.25" },
            odds: { home: "-0.98", away: "0.82" },
        },
        {
            id: 3,
            league: "Friendly",
            time: "11/01 - 6:30pm",
            homeTeam: "MSK Zilina",
            awayTeam: "Tatran Presov",
            homeImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-home_gc1jsj.svg",
            awayImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736596600/soccer-default-away_jymn4x.svg",
            handicap: { home: "-1", away: "1" },
            odds: { home: "0.86", away: "0.96" },
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="hotmatch-section bg-white pt-4">
            {/* Header Section */}
            <div className="top-container flex justify-between items-center mb-4">
                <p className="hotmatch-title text-lg font-bold">Hot Match</p>
                <div className="hotmatch-type-container flex space-x-2">
                    <button className="type-btn bg-orange-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:bg-orange-600">
                        Football
                    </button>
                    <button className="type-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300">
                        Basketball
                    </button>
                </div>
            </div>

            {/* Slider Section */}
            <Slider {...settings} className="hotmatch-slider">
                {hotMatches.map((match) => (
                    <div
                        key={match.id}
                        className="betContainer bg-gray-50 rounded-lg shadow-md p-4"
                    >
                        {/* League and Time */}
                        <div className="top-content flex justify-between items-center mb-4 bg-purple-800 text-white p-3 rounded-md">
                            <p className="bet-title font-semibold">{match.league}</p>
                            <div className="flex items-center space-x-2">
                                <p className="match-time text-sm">{match.time}</p>
                                <svg
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 90 90"
                                    fill="white"
                                >
                                    <path d="M45,0C20.1,0,0,20.1,0,45c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C90,20.1,69.9,0,45,0z M50.6,70.9 c0,3.1-2.5,5.6-5.6,5.6s-5.6-2.5-5.6-5.6V36.2c0-3.1,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6V70.9z M45,24.7c-3.1,0-5.6-2.5-5.6-5.6 c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6C50.6,22.2,48.1,24.7,45,24.7z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Teams and Details */}
                        <ul className="imgWrapper flex items-center justify-between bg-white p-3 rounded-md">
                            <li className="flex flex-col items-center">
                                <p className="font-semibold text-green-600">H</p>
                                <p className="text-gray-700 text-sm">{match.homeTeam}</p>
                            </li>
                            <li className="team-img flex items-center justify-center space-x-2">
                                <img
                                    src={match.homeImg}
                                    alt={`${match.homeTeam} logo`}
                                    className="w-10 h-10"
                                />
                                <img
                                    src={match.awayImg}
                                    alt={`${match.awayTeam} logo`}
                                    className="w-10 h-10"
                                />
                            </li>
                            <li className="flex flex-col items-center">
                                <p className="font-semibold text-red-600">A</p>
                                <p className="text-gray-700 text-sm">{match.awayTeam}</p>
                            </li>
                        </ul>

                        {/* Match Details */}
                        <div className="match-detail flex justify-between text-center mt-4">
                            <div className="handicap flex-1">
                                <p className="score text-sm font-semibold">{match.handicap.home}</p>
                                <p className="text-xs text-gray-600">HDP</p>
                                <p className="score text-sm font-semibold">{match.handicap.away}</p>
                            </div>
                            <div className="odds flex-1">
                                <p className="score text-sm font-semibold">{match.odds.home}</p>
                                <p className="text-xs text-gray-600">Odds</p>
                                <p className="score text-sm font-semibold">{match.odds.away}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HotMatch;
