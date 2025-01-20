"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

export default function BannerCarousel() {
    const banners = [
        { id: 0, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360476/Artboard_3_jjazjg.png", alt: "Banner 1" },
        { id: 1, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360474/Artboard_1_2_arlpck.png", alt: "Banner 2" },
        { id: 2, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360473/Artboard_2_2_wctqre.png", alt: "Banner 3" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: (dots: any) => (
            <div>
                <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-125"></div>
            </div>
        ),
    };



    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="w-full">
                        <picture>
                            <source type="image/webp" srcSet={banner.src} />
                            <img
                                src={banner.src}
                                alt={banner.alt}
                                className="w-full object-cover responsive-height"
                            />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
