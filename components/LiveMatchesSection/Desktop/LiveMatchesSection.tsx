"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const LiveMatchesSection = () => {
    const t = useTranslations("LiveMatchesSection");
    const [activeType, setActiveType] = useState(t('football'));
    const [isClient, setIsClient] = useState(false);
    

    useEffect(() => {
        setIsClient(true);
    }, []);

    const partnerVideos = [
        {
            videoSrc: "https://streamable.com/e/v5hjlr?enablejsapi=1",
            imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490288/videoImage20240330143617123_uomlzl.png",
            title: "Official Sponsor of the HSBC BWF World Tour Finals 2024",
        },
        {
            videoSrc: "https://streamable.com/e/we43qt?enablejsapi=1",
            imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490286/videoImage20231012175245946_kj117r.png",
            title: "BK8 Brand Ambassador Philippines 2023 - 2024",
        },
        {
            videoSrc: "https://streamable.com/e/x2nujf?enablejsapi=1",
            imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736490063/videoImage20240626095805049_bs1sfw.png",
            title: "Official Partner I Burnley F.C.",
        },
    ];

    const matches = [
        {
            type: t('football'),
            matches: [
                {
                    id: 0,
                    league: "Israel - Liga Bet",
                    time: "10/01 - 4:45pm",
                    homeTeam: "Hapoel Tirat HaCarmel",
                    awayTeam: "Hapoel Yafia",
                    homeHDP: "-1.25",
                    awayHDP: "1.25",
                    homeOdds: "0.92",
                    awayOdds: "0.76",
                },
                {
                    id: 1,
                    league: "Malaysia - Liga A1 Semi Pro",
                    time: "10/01 - 4:45pm",
                    homeTeam: "Bunga Raya",
                    awayTeam: "KL Rovers",
                    homeHDP: "-1.75",
                    awayHDP: "1.75",
                    homeOdds: "0.84",
                    awayOdds: "0.84",
                },
                {
                    id: 2,
                    league: "Algeria - League Women",
                    time: "10/01 - 5:00pm",
                    homeTeam: "AS Oran Centre [W]",
                    awayTeam: "AR Guelma [W]",
                    homeHDP: "0",
                    awayHDP: "0",
                    homeOdds: "0.82",
                    awayOdds: "0.86",
                },
                {
                    id: 2,
                    league: "Algeria - League Women",
                    time: "10/01 - 5:00pm",
                    homeTeam: "AS Oran Centre [W]",
                    awayTeam: "AR Guelma [W]",
                    homeHDP: "0",
                    awayHDP: "0",
                    homeOdds: "0.82",
                    awayOdds: "0.86",
                },
                {
                    id: 2,
                    league: "Algeria - League Women",
                    time: "10/01 - 5:00pm",
                    homeTeam: "AS Oran Centre [W]",
                    awayTeam: "AR Guelma [W]",
                    homeHDP: "0",
                    awayHDP: "0",
                    homeOdds: "0.82",
                    awayOdds: "0.86",
                },
            ],
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: (
            <button className="bg-white rounded-full shadow-md p-2 absolute left-0 transform -translate-y-1/2">
                <FaArrowLeft className="text-gray-700" />
            </button>
        ),
        nextArrow: (
            <button className="bg-white rounded-full shadow-md p-2 absolute right-0 transform -translate-y-1/2">
                <FaArrowRight className="text-gray-700" />
            </button>
        ),
    };

    return (
        <section className=" mx-auto max-w-[1400px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold"> { t('upcomingLiveMatches') } </h2>
                <div className="flex space-x-4">
                    {[t('football'), t('basketball')].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${activeType === type
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setActiveType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 bg-gray-100 py-8 rounded-lg">


                {/* Partner Video Section */}
                {isClient && (
                    <Slider
                        {...{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 5000,
                            prevArrow: (
                                <button className="bg-white rounded-full shadow-md p-2 absolute left-0 transform -translate-y-1/2">
                                    <FaArrowLeft className="text-gray-700" />
                                </button>
                            ),
                            nextArrow: (
                                <button className="bg-white rounded-full shadow-md p-2 absolute right-0 transform -translate-y-1/2">
                                    <FaArrowRight className="text-gray-700" />
                                </button>
                            ),
                        }}
                    >
                        {partnerVideos.map((video, index) => (
                            <div key={index} className="relative w-full h-[350px] overflow-hidden">
                                <div className="absolute inset-0 flex">
                                    {/* Left Section (Image) */}
                                    <div
                                        className="flex-1 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${video.imgSrc}')`,
                                        }}
                                    >
                                        <div className="absolute inset-0  flex items-end p-4 text-white">
                                            <div>
                                                <h3 className="text-lg text-black font-bold">{video.title}</h3>
                                                <button className="mt-2 bg-orange-500 py-2 px-4 rounded-lg shadow-md hover:bg-orange-600">
                                                    Bet Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Section (Video) */}
                                    <div className="flex-1 relative rounded-lg">
                                        <iframe
                                            src={video.videoSrc}
                                            title={`partner-video-${index}`}
                                            className="w-full h-full rounded-lg"
                                            allow="fullscreen; autoplay"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}

                {/* Matches Slider */}
                {isClient && (
                    <Slider
                        {...{
                            dots: true,
                            infinite: false,
                            speed: 500,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            prevArrow: (
                                <button className="bg-white rounded-full shadow-md p-2 absolute left-0 transform -translate-y-1/2">
                                    <FaArrowLeft className="text-gray-700" />
                                </button>
                            ),
                            nextArrow: (
                                <button className="bg-white rounded-full shadow-md p-2 absolute right-0 transform -translate-y-1/2">
                                    <FaArrowRight className="text-gray-700" />
                                </button>
                            ),
                        }}
                    >
                        {matches.find((matchType) => matchType.type === activeType)?.matches.map((match) => (
                            <div
                                key={match.id}
                                className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white mx-2"
                            >
                                {/* Match Header */}
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 flex items-center justify-between text-white">
                                    <p className="text-sm font-medium">{match.league}</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-xs">{match.time}</p>
                                        <svg
                                            width="16"
                                            height="16"
                                            className="text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 90 90"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M45,0C20.1,0,0,20.1,0,45c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C90,20.1,69.9,0,45,0z M50.6,70.9 
                                            c0,3.1-2.5,5.6-5.6,5.6s-5.6-2.5-5.6-5.6V36.2c0-3.1,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6V70.9z M45,24.7c-3.1,0-5.6-2.5-5.6-5.6 
                                            c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6C50.6,22.2,48.1,24.7,45,24.7z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Teams Section */}
                                <div className="flex items-center justify-between p-4">
                                    {/* Home Team */}
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm font-bold text-green-600">H</span>
                                        <p className="text-sm text-gray-800">{match.homeTeam}</p>
                                        <img
                                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736494097/soccer-default-home_y8r3bt.svg"
                                            alt="Home Team Logo"
                                            className="w-10 h-10 mt-2"
                                        />
                                    </div>

                                    {/* VS Icon */}
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm font-bold text-gray-400">VS</p>
                                    </div>

                                    {/* Away Team */}
                                    <div className="flex flex-col items-center">
                                        <span className="text-sm font-bold text-red-600">A</span>
                                        <p className="text-sm text-gray-800">{match.awayTeam}</p>
                                        <img
                                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736494097/soccer-default-away_uc8ffe.svg"
                                            alt="Away Team Logo"
                                            className="w-10 h-10 mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Odds and Handicap Section */}
                                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-gray-600">HDP</p>
                                        <p className="text-sm font-bold text-gray-800">{match.homeHDP}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-gray-600">Odds</p>
                                        <p className="text-sm font-bold text-blue-500">{match.homeOdds}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-gray-600">HDP</p>
                                        <p className="text-sm font-bold text-gray-800">{match.awayHDP}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-gray-600">Odds</p>
                                        <p className="text-sm font-bold text-blue-500">{match.awayOdds}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Slider>
                )}

            </div>
        </section>
    );
};

export default LiveMatchesSection;
