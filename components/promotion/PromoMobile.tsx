"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// Promotions Data
const promotions = [
  {
    title: '288% "Have You BK8?" Welcome Bonus',
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186883/prm-20241129172928224_annfvi.jpg",
    days: 70,
    hours: 8,
    minutes: 38,
    seconds: 46,
  },
  {
    title: "Welcome Bonus",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186415/prm-20241024064849544_iiobjq.jpg",
    days: 70,
    hours: 8,
    minutes: 38,
    seconds: 46,
  },
  {
    title: "Claim 188 Slots Free Spins",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186415/prm-20240906095723085_cdgbab.jpg",
    days: 69,
    hours: 8,
    minutes: 38,
    seconds: 46,
  },
  {
    title: "CNY 2025 Snake Gold Bar Challenge",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737186414/prm-20240823030004959_k12y5c.jpg",
    days: 20,
    hours: 8,
    minutes: 38,
    seconds: 46,
  },
];

// Countdown Timer Component
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
    <div className="countdown-container flex items-center justify-between text-gray-800">
      <div className="digit-box flex flex-col items-center">
        <p className="digit-day text-lg font-bold">{time.days}</p>
        <span className="desc-day text-xs text-gray-500">Day</span>
      </div>
      <div className="time-box flex items-center space-x-1">
        <p className="time-hour text-lg font-bold">{time.hours}</p>
        <span className="text-sm">:</span>
        <p className="time-mins text-lg font-bold">{time.minutes}</p>
        <span className="text-sm">:</span>
        <p className="time-sec text-lg font-bold">{time.seconds}</p>
      </div>
    </div>
  );
};

// Promotion Card Component
interface PromoType {
  title: string;
  image: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const PromoCard = ({ promo }: { promo: PromoType }) => (
  <div className="promo-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 flex-shrink-0 w-80">
    <div className="promo-banner-images">
      <img
        src={promo.image}
        alt={promo.title}
        className="promo-banner w-full object-cover sm:h-48 md:h-56 lg:h-64"
      />
    </div>
    <div className="promo-content p-4">
      <p className="promo-title text-sm sm:text-base font-semibold mb-2">
        {promo.title}
      </p>
      <Countdown {...promo} />
      <button className="promo-btn mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
        Login
      </button>
    </div>
  </div>
);

// Main Promos & Rewards Component With Horizontal Slider
const PromosRewards = () => {
  return (
    <section className="mobile-latest-promo-section w-full p-4 bg-gray-50">
      <div className="homeTitleSection flex justify-between items-center mb-4">
        <p className="homeTitle text-lg font-bold">Promos & Rewards</p>
        <Link href="/promotion" className="seeAll text-sm text-blue-500 cursor-pointer hover:underline">
          See all
        </Link>
      </div>
      <div className="promo-slider flex overflow-x-auto space-x-4 scrollbar-hide">
        {promotions.map((promo, index) => (
          <PromoCard key={index} promo={promo} />
        ))}
      </div>
    </section>
  );
};

export default PromosRewards;
