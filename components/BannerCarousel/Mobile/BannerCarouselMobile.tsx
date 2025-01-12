"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarouselMobile() {
    const banners = [
        { id: 0, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736483978/banner20250103034224969_pibm5o.webp", alt: "Banner 1" },
        { id: 1, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736483977/banner20241009083500289_m2co8o.webp", alt: "Banner 2" },
        { id: 2, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736483976/banner20240426091906333_gdlmpl.webp", alt: "Banner 3" },
        { id: 3, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736483977/banner20241024105658074_o0ifde.webp", alt: "Banner 4" },
        { id: 4, src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736483976/banner20231013031432033_xxbz7e.jpg", alt: "Banner 5" },
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
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: "16 / 5" }} // Ensures consistent aspect ratio
                            />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
