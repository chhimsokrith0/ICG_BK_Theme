"use client";

import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
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

    const testimonials = [
        {
            title: "Safe and reputable platform that you can trust!",
            description:
                "I hesitate to make a deposit or share my information on other platforms because I don't feel safe. However, BK8 gave me the confidence as they have a verified domain and security measures in place. I always feel safe playing on BK8.",
            rating: 5,
        },
        {
            title: "Happy to switch to BK8! Awesome!",
            description:
                "I am really happy to switch to BK8. High payouts and fantastic bonuses. You'd have to try it to believe it!",
            rating: 5,
        },
        {
            title: "Feel like a real VIP with them!",
            description:
                "They are going above and beyond to provide exceptional services for their VIPs, with exclusive rewards and perks from time to time. BK8 gained a loyal member like me now!",
            rating: 5,
        },
    ];

    return (
        <section className="testimonial-section mx-auto max-w-[1400px] py-12 px-4 md:px-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                What Our Users Say
            </h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
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
                                <svg
                                    key={starIndex}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="text-yellow-500 mx-1"
                                >
                                    <path
                                        d="M12 .587l3.668 7.425 8.2 1.191-5.934 5.8L19.8 23.2 12 19.552 4.2 23.2l1.865-8.197L.132 9.203l8.2-1.191L12 .587z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
