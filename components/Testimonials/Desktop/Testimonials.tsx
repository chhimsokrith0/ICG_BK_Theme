"use client";

import React from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {


    const t = useTranslations("Testimonials");

    const Testimonials = t.raw('reviews')

    const testimonials = Testimonials.map((testimonials: any) => ({
        title: testimonials.title,
        description: testimonials.description,
        rating: testimonials.rating,
    }));


    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
        <section className="testimonial-section mx-auto max-w-[1400px] py-12 px-4 md:px-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                {t("testimonialsTitle")}
            </h2>
            <Slider {...settings}>
                {testimonials.map((testimonial: any, index: number) => (
                    <div
                        key={index}
                        className="testimonial-box p-6 md:p-8 mx-2 flex flex-col items-center text-center "
                    >
                        <p className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                            {testimonial.title}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                            {testimonial.description}
                        </p>
                        <div className="star-container flex justify-center">
                            {[...Array(testimonial.rating)].map((_, starIndex) => (
                                <FaStar key={starIndex} className="text-yellow-500 mx-1" size={24} />
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
