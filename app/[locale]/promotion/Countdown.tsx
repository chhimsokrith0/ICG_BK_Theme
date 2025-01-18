import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-31T23:59:59").getTime(); // Replace with your target date
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-xs text-gray-500 mb-2">Remaining Time</p>
      <div className="flex items-center">
        {/* Days */}
        <div className="flex flex-col items-center bg-white py-2 px-4 rounded-lg mx-1 shadow-sm">
          <p className="text-lg font-bold text-gray-800">{timeLeft.days}</p>
          <p className="text-xs text-gray-500">Days</p>
        </div>
        {/* Time Separator */}
        <span className="text-gray-500 mx-1">:</span>
        {/* Hours */}
        <div className="flex flex-col items-center bg-white py-2 px-4 rounded-lg mx-1 shadow-sm">
          <p className="text-lg font-bold text-gray-800">{timeLeft.hours}</p>
          <p className="text-xs text-gray-500">Hours</p>
        </div>
        {/* Time Separator */}
        <span className="text-gray-500 mx-1">:</span>
        {/* Minutes */}
        <div className="flex flex-col items-center bg-white py-2 px-4 rounded-lg mx-1 shadow-sm">
          <p className="text-lg font-bold text-gray-800">{timeLeft.minutes}</p>
          <p className="text-xs text-gray-500">Mins</p>
        </div>
        {/* Time Separator */}
        <span className="text-gray-500 mx-1">:</span>
        {/* Seconds */}
        <div className="flex flex-col items-center bg-white py-2 px-4 rounded-lg mx-1 shadow-sm">
          <p className="text-lg font-bold text-gray-800">{timeLeft.seconds}</p>
          <p className="text-xs text-gray-500">Sec</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
