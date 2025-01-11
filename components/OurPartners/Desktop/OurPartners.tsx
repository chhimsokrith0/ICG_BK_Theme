"use client";

import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css";

const OurPartners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const partners = [
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510531/tf_nh9t3h.svg",
            alt: "Evolution",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510528/spb_hv4w5h.svg",
            alt: "WM Casino",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510525/sg_cntiif.svg",
            alt: "Microgaming",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510521/sa_tzjxz2.svg",
            alt: "Pragmatic Play",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510519/redtiger_xqyoyw.svg",
            alt: "IM Exsports",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510537/ygr_j5ghhs.svg",
            alt: "NextSpin",
        },
        {
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510534/wm_xnal81.svg",
            alt: "BK8 Sports",
        },
    ];

    return (
        <>
            <section className="our-partner-section mx-auto max-w-[1400px] py-6 px-4">
                <div className="flex justify-between items-center mb-8">
                    <p className="text-2xl font-bold text-gray-800">Our Partners</p>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                        See all
                    </a>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-4">
                    <Slider {...settings}>
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="partner-logo flex-shrink-0 w-full h-28 bg-white rounded-lg shadow-md flex items-center justify-center transition-transform transform hover:scale-105"
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={partner.src} alt={partner.alt} className="w-auto max-h-16 max-w-[90%] object-contain" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </section>

        </>
    );
};

export default OurPartners;
