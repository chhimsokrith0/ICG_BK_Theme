"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
    return (
        <section className="announcementBarSection bg-white text-black py-2 mx-auto max-w-[1000px] border-t border-b border-gray-200 overflow-hidden">
            <div className="annoucement-bar-component flex items-center justify-between">
                {/* Left Block */}
                <div className="annoucement-moving announcement-content-container flex items-center flex-1">
                    <div className="left-block font-bold text-xs px-4 py-1 bg-blue-600 text-white rounded-full">
                        News
                    </div>

                    {/* Animated Text */}
                    <div
                        className="announcement-content-animation-box flex-1 overflow-hidden relative h-[24px]" // Added height
                        id="msg-content"
                    >
                        <motion.div
                            id="msgAnimate"
                            className="absolute whitespace-nowrap text-ellipsis overflow-hidden"
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{
                                duration: 20, // Adjusted for smoother animation
                                repeat: Infinity,
                                repeatType: "loop", // Ensures seamless looping
                                ease: "linear", // Smooth constant scrolling
                            }}
                            initial={{ x: "100%" }} // Starts offscreen
                        >
                            Invite your friends to join ICG Gaming and win big together this Chinese New Year! Up to MYR 4,888 referral bonus awaits!
                        </motion.div>
                    </div>
                </div>

                {/* More Button */}
                <div className="more-btn text-sm px-4 text-blue-600 cursor-pointer">
                    More
                </div>
            </div>
        </section>
    );
}
