"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const promotions = [
  {
    title: '288% "Have You BK8?" Welcome Bonus',
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186890/prm-20250103035940278_cyvfhw.jpg",
    days: 72,
    hours: 3,
    minutes: 55,
    seconds: 46,
  },
  {
    title: "Claim 88 Slots Free Spins",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186884/prm-20241212161834082_jzfryj.jpg",
    days: 72,
    hours: 3,
    minutes: 56,
    seconds: 14,
  },
  {
    title: "BK8 VIP Migration Program",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186883/prm-20241129172928224_annfvi.jpg",
    days: 72,
    hours: 3,
    minutes: 56,
    seconds: 14,
  },
  {
    title: "Lucky Wheel Spin: Login and Win Special Prizes",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186883/prm-20241129172133464_vptr5f.jpg",
    days: 72,
    hours: 3,
    minutes: 56,
    seconds: 14,
  },
];

// Countdown Component
interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ days, hours, minutes, seconds }: CountdownProps) => {
  const [time, setTime] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container flex items-center justify-between">
      <div className="digit-box flex items-center">
        <p className="text-xl font-bold mr-2">{time.days}</p>
        <div className="time-box flex items-center">
          <p className="text-lg">{time.hours}</p>
          <span className="mx-1">:</span>
          <p className="text-lg">{time.minutes}</p>
          <span className="mx-1">:</span>
          <p className="text-lg">{time.seconds}</p>
        </div>
      </div>
    </div>
  );
};

// PromoCard Component
interface Promo {
  title: string;
  image: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const PromoCard = ({ promo }: { promo: Promo }) => (
  <div className="promo-container bg-white rounded-lg shadow-lg mx-2 flex flex-col overflow-hidden">
    <div className="promo-banner-images flex-grow">
      <img
        src={promo.image}
        alt={promo.title}
        className="w-full h-36 md:h-40 object-cover"
        loading="lazy"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.onerror = null;
          img.src = "/fallback-image.jpg"; // Fallback image
        }}
      />
    </div>
    <div className="promo-content p-4 text-center">
      <p className="text-base md:text-lg font-semibold mb-2">{promo.title}</p>
      <Countdown {...promo} />
      <button className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
        Login
      </button>
    </div>
  </div>
);

// PromoMobile Component
const PromoMobile = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
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
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="mobile-latest-promo-section px-4 py-6">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-base md:text-lg font-semibold">Latest Promotions</p>
        <p className="text-sm text-blue-500 cursor-pointer">See all</p>
      </div>
      <Slider {...settings}>
        {promotions.map((promo, index) => (
          <PromoCard key={index} promo={promo} />
        ))}
      </Slider>
    </section>
  );
};

export default PromoMobile;
