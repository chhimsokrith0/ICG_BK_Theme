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
    children?: React.ReactNode;
}

// Custom Arrow Component
const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, children }) => (
    <button
        type="button"
        className={`${className} bg-white border border-blue-200 rounded-full shadow-md flex items-center justify-center w-10 h-10 absolute top-1/2 transform -translate-y-1/2`}
        style={{
            ...style,
            zIndex: 10,
        }}
        onClick={onClick}
    >
        {children}
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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: (
            <CustomArrow className="slick-prev -left-4">
                <FaArrowLeft className="text-blue-500 w-5 h-5" />
            </CustomArrow>
        ),
        nextArrow: (
            <CustomArrow className="slick-next -right-4">
                <FaArrowRight className="text-blue-500 w-5 h-5" />
            </CustomArrow>
        ),
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
        <div className="relative w-full px-4 py-6 mx-auto max-w-[1400px]">
            <Slider {...settings}>
                {promotions.map((promo) => (
                    <div
                        key={promo.id}
                        className="flex justify-center items-center px-2"
                    >
                        <img
                            src={promo.src}
                            alt={promo.alt}
                            className="rounded-md shadow-lg object-cover w-full max-h-40 sm:max-h-48 md:max-h-64 lg:max-h-80"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
