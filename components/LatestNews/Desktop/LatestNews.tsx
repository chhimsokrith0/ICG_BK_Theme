"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestNews = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const news = [
        {
            title: "BK8 x Manny Pacquiao",
            description:
                "BK8 betting platform has announced a new Brand Ambassador in the Philippines with renowned boxing legend Manny Pacquiao on 1 December 2023. The partnership with Pacquiao, winner of 12 world titles in eight different weight divisions will surely take BK8's approach to greater heights.",
            date: "19/12/2023",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736512938/manny_pacquiao_tfrpgd.png",
        },
        {
            title: "BK8 x Aston Villa",
            description:
                "BK8 and Aston Villa have entered into a multi-year partnership, with BK8 serving as the Principal and Front of Shirt Partner until the 2023/2024 season. BK8 is actively engaged in various local charitable initiatives.",
            date: "16/06/2023",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736512935/bwf_p5bc64.png",
        },
        {
            title: "BK8 x Burnley F.C.",
            description:
                "BK8 is the Official Asia Betting Partner for Burnley F.C. since 2022, and the partnership has been further extended to include being the Official Training Wear partner for the 2023/2024 season.",
            date: "16/06/2023",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736512932/burnley-fc_kdlzms.png",
        },
        {
            title: "BK8 x BWF",
            description:
                "BK8 serves as the Official Betting Sponsor of selected HSBC BWF World Tour events in 2024. This strategic partnership will be celebrated at international events.",
            date: "10/5/2024",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736512931/aston-villa_kjdc7i.png",
        },
    ];

    return (
        <section className="latest-news-section mx-auto max-w-[1400px] py-8 px-4 bg-gray-50 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-6">BK8 Latest News</p>
            <Slider {...settings}>
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="latest-news-box w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col justify-between"
                    >
                        <div className="box-img-container mb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="box-content flex-grow">
                            <p className="box-title font-bold text-lg mb-2">{item.title}</p>
                            <p className="box-desc text-sm text-gray-600 mb-4 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                        <div>
                            <p className="box-date text-xs text-gray-400">{item.date}</p>
                        </div>
                    </div>
                ))}
            </Slider>


        </section>
    );
};

export default LatestNews;
