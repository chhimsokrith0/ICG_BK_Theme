"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

const LatestNews = () => {
    const t = useTranslations("LatestNews");

    const News = t.raw('news')

    const news = News.map((news: any) => ({
        title: news.title,
        description: news.description,
        date: news.date,
        image: news.image,
    }));



    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Removed arrows for a cleaner look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="latest-news-section mx-auto max-w-[1400px] py-8 px-4 md:px-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                {t("latestNewsTitle")}
            </h2>
            <Slider {...settings}>
                {news.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="latest-news-box w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div className="box-img-container mb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[180px] md:h-[220px] lg:h-[250px] object-cover rounded-md"
                            />
                        </div>
                        <div className="box-content flex-grow">
                            <p className="box-title font-bold text-lg md:text-xl mb-2 text-gray-800">
                                {item.title}
                            </p>
                            <p className="box-desc text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                        <div className="box-date text-xs text-gray-400">{item.date}</div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default LatestNews;
