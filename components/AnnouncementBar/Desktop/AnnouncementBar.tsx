"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
    return (
        <section className="announcementBarSection bg-white text-black py-2  overflow-hidden">
            <div className="annoucement-bar-component flex flex-wrap items-center justify-between max-w-[1200px] mx-auto px-4">
                {/* Left Block */}
                <div className="announcement-moving announcement-content-container flex items-center flex-1 min-w-0">
                    <div className="left-block font-bold text-xs sm:text-sm px-3 py-1 bg-blue-600 text-white rounded-full whitespace-nowrap">
                        News
                    </div>

                    {/* Animated Text */}
                    <div
                        className="announcement-content-animation-box flex-1 overflow-hidden relative h-[24px] sm:h-[28px] ml-2"
                        id="msg-content"
                    >
                        <motion.div
                            id="msgAnimate"
                            className="absolute whitespace-nowrap text-ellipsis overflow-hidden"
                            animate={{ x: ["100%", "-100%"] }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            }}
                            initial={{ x: "100%" }}
                        >
                            Invite your friends to join ICG Gaming and win big together this Chinese New Year! Up to MYR 4,888 referral bonus awaits!
                        </motion.div>
                    </div>
                </div>

                {/* More Button */}
                <div className="more-btn text-xs sm:text-sm px-2 sm:px-4 text-blue-600 cursor-pointer mt-2 sm:mt-0">
                    More
                </div>
            </div>
        </section>
    );
}
