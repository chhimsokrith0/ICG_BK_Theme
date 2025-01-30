'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnnouncementModal from '../AnnouncementModal';
import { useTranslations } from 'next-intl';

export default function AnnouncementBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('AnnountcementBar');

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <section className="announcementBarSection bg-white text-black py-2 overflow-hidden">
                <div className="annoucement-bar-component flex flex-wrap items-center justify-between max-w-[1200px] mx-auto px-4">
                    {/* Left Block */}
                    <div className="announcement-moving announcement-content-container flex items-center flex-1 min-w-0">
                        <div className="left-block font-bold text-xs sm:text-sm px-3 py-1 bg-blue-600 text-white rounded-full whitespace-nowrap">
                        {t('news')}
                        </div>

                        {/* Animated Text */}
                        <div
                            className="announcement-content-animation-box flex-1 overflow-hidden relative h-[24px] sm:h-[28px] ml-2"
                            id="msg-content"
                        >
                            <motion.div
                                id="msgAnimate"
                                className="absolute whitespace-nowrap text-ellipsis overflow-hidden"
                                animate={{ x: ['100%', '-100%'] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'linear',
                                }}
                                initial={{ x: '100%' }}
                            >
                                {t('announcementMessage')}
                            </motion.div>
                        </div>
                    </div>

                    {/* More Button */}
                    <div
                        className="more-btn text-xs sm:text-sm px-2 sm:px-4 text-blue-600 cursor-pointer mt-2 sm:mt-0"
                        onClick={handleModalToggle}
                    >
                        {t('more')}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && <AnnouncementModal onClose={handleModalToggle} />}
        </>
    );
}
