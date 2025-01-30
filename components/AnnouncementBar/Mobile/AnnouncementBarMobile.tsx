"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import AnnouncementModal from '../AnnouncementModal';
import { useTranslations } from 'next-intl';
export default function AnnouncementBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('AnnountcementBar');

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <section className="announcementBarSection bg-white text-black py-2 overflow-hidden border-b border-gray-200">
            <div className="annoucement-bar-component flex items-center justify-between max-w-[1200px] mx-auto px-4">
                {/* Left Block with Icon */}
                <div className="left-block flex items-center space-x-3 flex-shrink-0">
                    {/* Microphone Icon */}
                    <div className="relative flex items-center">
                        <svg
                            width="20"
                            height="20"
                            className="microphone-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15.89102 23.98394"
                        >
                            <style>
                                {`
                                    .microphone-icon .st0{fill:url(#SVGID_1_); }
                                    .microphone-icon .st1{fill:url(#SVGID_2_); }
                                    .microphone-icon .st2{fill:url(#SVGID_3_); }
                                    .microphone-icon .st3{fill:url(#SVGID_4_); }
                                `}
                            </style>
                            <g>
                                <linearGradient
                                    id="SVGID_1_"
                                    gradientUnits="userSpaceOnUse"
                                    x1="15.60798"
                                    y1="7.55782"
                                    x2="0.01464"
                                    y2="8.44525"
                                >
                                    <stop offset="0" style={{ stopColor: "rgb(4, 169, 194)" }} />
                                    <stop offset="1" style={{ stopColor: "rgb(9, 94, 189)" }} />
                                </linearGradient>
                                <path
                                    className="st0"
                                    d="M7.94502,15.98757c-2.5752,0-4.66992-2.09473-4.66992-4.66992V4.67117c0-2.5752,2.09473-4.6709,4.66992-4.6709
                                s4.6709,2.0957,4.6709,4.6709v6.64648C12.61592,13.89285,10.52022,15.98757,7.94502,15.98757z"
                                />
                            </g>
                        </svg>
                        {/* Red Notification Badge */}
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                            0
                        </span>
                    </div>
                </div>

                {/* Announcement Text */}
                <div
                    className="announcement-content-animation-box flex-1 overflow-hidden relative"
                    id="msg-content"
                    style={{ height: "24px" }}
                >
                    <motion.div
                        id="msgAnimate"
                        className="absolute whitespace-nowrap text-sm text-gray-800"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        initial={{ x: "100%" }}
                    >
                        {t('announcementMessage')}
                    </motion.div>
                </div>

                {/* More Button */}
                <div onClick={handleModalToggle} className="more-btn text-xs sm:text-sm px-2 sm:px-4 text-blue-600 cursor-pointer">
                {t('more')}
                </div>
            </div>
             {/* Modal */}
             {isModalOpen && <AnnouncementModal onClose={handleModalToggle} />}
        </section>
    );
}
