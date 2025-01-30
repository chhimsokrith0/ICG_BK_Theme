"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Define props type for the CustomArrow component
interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    direction: "left" | "right";
}

// Custom Arrow Component
const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, direction }) => (
    <button
        type="button"
        className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 bg-gradient-to-r ${
            direction === "left"
                ? "from-blue-500 to-blue-700 left-[-50px] md:left-[-40px]"
                : "from-blue-700 to-blue-500 right-[-50px] md:right-[-40px]"
        } text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}
        style={{ ...style }}
        onClick={onClick}
    >
        {direction === "left" ? <FaArrowLeft className="text-xl" /> : <FaArrowRight className="text-xl" />}
    </button>
);

export default function PromoCarousel() {
    const promotions = [
        {
            id: 0,
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736484842/prm-20250103035940278_rhuc7n.jpg",
            alt: "Promotion 1",
        },
        {
            id: 1,
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736484840/prm-20241212161834082_cpvrqs.jpg",
            alt: "Promotion 2",
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736484839/prm-20241129172928224_fpomzj.jpg",
            alt: "Promotion 3",
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736484838/prm-20241129172133464_kjcdol.jpg",
            alt: "Promotion 4",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: false,
        arrows: true,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
        responsive: [
            {
                breakpoint: 1024, // Screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // Screens smaller than 768px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Screens smaller than 480px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative w-full px-4 py-8 mx-auto max-w-[1400px]">

            {/* Slider */}
            <Slider {...settings}>
                {promotions.map((promo) => (
                    <div key={promo.id} className="px-3">
                        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img
                                src={promo.src}
                                alt={promo.alt}
                                className="w-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
