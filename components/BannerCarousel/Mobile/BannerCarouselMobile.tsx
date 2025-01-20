"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarouselMobile() {
    const banners = [
        { id: 0, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360476/Artboard_3_jjazjg.png", alt: "Banner 1" },
        { id: 1, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360474/Artboard_1_2_arlpck.png", alt: "Banner 2" },
        { id: 2, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737360473/Artboard_2_2_wctqre.png", alt: "Banner 3" },
    ];

    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div className="relative w-full mx-auto">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="w-full">
                        <picture>
                            <source type="image/webp" srcSet={banner.src} />
                            <img
                                src={banner.src}
                                alt={banner.alt}
                                className="w-full object-cover"
                                style={{ aspectRatio: "16 / 5" }} // Ensures consistent aspect ratio
                            />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
