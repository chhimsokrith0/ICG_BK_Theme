"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick for SSR compatibility
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export function Testimonials() {
  const testimonials = [
    {
      title: "Highly recommend if you're a high roller!",
      description:
        "I registered in a lot of betting platforms but nothing beats BK8's exclusive rewards and personalised experience for their VIPs. That's why I play here.",
      stars: 5,
    },
    {
      title: "Truly specialise in crypto deposit and withdrawal",
      description:
        "I've been searching for a platform that accepts crypto. BK8 is convenient in depositing or withdrawing with crypto. That's why I play here.",
      stars: 5,
    },
    {
      title: "Haven't seen such nice treatment than BK8~",
      description:
        "I really like being their GOLD VIP. I am always positively surprised by their hospitality and thoughtful gifts that I truly enjoy.",
      stars: 5,
    },
    {
      title: "Fantastic VIP experience!",
      description:
        "You can expect the best VIP experience with BK8. They spoil you with lucrative bonuses, offers, and gifts, making sure you're a happy camper here!",
      stars: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0b2134] py-16">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-yellow-500 text-lg font-semibold mb-8">
          Here's what our customers say about being a VIP...
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 mx-4 rounded-lg text-white flex flex-col items-center shadow-lg"
              style={{
                background: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737201704/testimonals_q5im6i.jpg') no-repeat center center / cover`,
              }}
            >
              <h3 className="font-bold text-lg mb-4">{testimonial.title}</h3>
              <p className="text-sm mb-4">{testimonial.description}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <img
                    key={i}
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737201842/star_kzv7vh.png"
                    alt="star"
                    className="w-4 h-4 mx-1"
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// Default export of Testimonials
export default function App() {
  return (
    <div>
      <Testimonials />
    </div>
  );
}
