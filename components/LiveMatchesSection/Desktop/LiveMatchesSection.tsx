
"use client";

import React, { useState, useEffect } from "react";
import Slider, { Settings as SlickProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import CustomArrow from "./CustomArrow";
import VideoCard from "./VideoCard";
import MatchCard from "./MatchCard";
import { partnerVideos, getMatches  } from "@/data/data";

const LiveMatchesSection: React.FC = () => {
    const t = useTranslations("LiveMatchesSection");
    const [activeType, setActiveType] = useState<string>(t('football'));
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const matchSettings: SlickProps = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
    };

    const matches = getMatches(t);

    return (
        <section className="mx-auto max-w-[1400px] p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">{t('upcomingLiveMatches')}</h2>
                <div className="flex space-x-4">
                    {[t('football'), t('basketball')].map((type) => (
                        <button
                            key={type}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${activeType === type ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
                            onClick={() => setActiveType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-gray-100 py-8 rounded-lg shadow-lg">
                {isClient && (
                    <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000} prevArrow={<CustomArrow direction="left" />} nextArrow={<CustomArrow direction="right" />}>
                        {partnerVideos.map((video, index) => (
                            <VideoCard key={index} video={video} />
                        ))}
                    </Slider>
                )}

                {isClient && (
                    <Slider {...matchSettings}>
                        {matches.find((matchType) => matchType.type === activeType)?.matches.map((match) => (
                            <MatchCard key={match.id} match={match} />
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    );
};

export default LiveMatchesSection;
