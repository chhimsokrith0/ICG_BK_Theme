import React, { useEffect, useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import "./style.css";

// Utility functions to generate random data
const getRandomName = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return (
        Array(5)
            .fill(null)
            .map(() => (Math.random() > 0.5 ? "*" : chars[Math.floor(Math.random() * chars.length)]))
            .join("") + Math.floor(Math.random() * 100)
    );
};

const getRandomDate = () => {
    const start = new Date(2025, 0, 1);
    const end = new Date(2025, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split("T")[0];
};

const getRandomPrize = () => {
    const prizes = ["25 Points", "50 Points", "KHUSD 1.03", "KHUSD 2.56", "Special Prize"];
    return prizes[Math.floor(Math.random() * prizes.length)];
};

const WinnerListMobile = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Generate random data for 50 winners
    const winners = Array.from({ length: 50 }, () => ({
        date: getRandomDate(),
        name: getRandomName(),
        prize: getRandomPrize(),
    }));

    // Animation springs for multiple list items
    const [springs, api] = useSprings(winners.length, (index) => ({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        delay: index * 100, // Stagger animation for each item
        config: { tension: 180, friction: 20 },
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            const container = scrollContainerRef.current;
            if (container) {
                // Scroll down smoothly by a random amount
                container.scrollBy({
                    top: Math.random() * 50 + 30, // Random scroll distance between 30 and 80px
                    behavior: "smooth",
                });

                // Reset scroll to the top if near the bottom
                if (container.scrollTop + container.clientHeight >= container.scrollHeight - 50) {
                    container.scrollTo({ top: 0, behavior: "smooth" });
                    // Re-trigger animations when scrolling resets
                    api.start((index) => ({
                        from: { opacity: 0, transform: "translateY(20px)" },
                        to: { opacity: 1, transform: "translateY(0px)" },
                        delay: index * 100,
                    }));
                }
            }
        }, 2000); // Scroll every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [api]);

    return (
        <div
            ref={scrollContainerRef}
            className="overflow-y-auto h-[360px] pt-4 pr-2 scrollbar-none"
            style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+ 
            }}
        >
            <table className="w-full text-white text-xs">
                <tbody>
                    {springs.map((style, index) => (
                        <animated.tr
                            key={index}
                            style={style}
                            className="border-b border-gray-500"
                        >
                            <td className="py-2 px-2 text-left">{winners[index].date}</td>
                            <td className="py-2 px-2 text-left">
                                {winners[index].name}{" "}
                                <span
                                    className={`font-bold ${
                                        winners[index].prize.includes("Points")
                                            ? "text-orange-400"
                                            : "text-blue-300"
                                    }`}
                                >
                                    {winners[index].prize}
                                </span>
                            </td>
                        </animated.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WinnerListMobile;
