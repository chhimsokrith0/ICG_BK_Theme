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
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-[1400px] mx-auto px-4 py-3">
                    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                        <div className="flex items-center flex-1 min-w-0 bg-gray-50 rounded-lg p-2">
                            <div className="font-medium text-xs sm:text-sm px-3 py-1.5 bg-blue-600 text-white rounded-full">
                                {t("news")}
                            </div>
                            <div className="flex-1 overflow-hidden relative h-[24px] sm:h-[28px] ml-3">
                                <motion.div
                                    className="absolute whitespace-nowrap text-ellipsis overflow-hidden text-gray-600"
                                    animate={{ x: ["100%", "-100%"] }}
                                    transition={{
                                        duration: 15,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop",
                                        ease: "linear",
                                    }}
                                    initial={{ x: "100%" }}
                                >
                                    {t("announcementMessage")}
                                </motion.div>
                            </div>
                        </div>
                        <button
                            onClick={handleModalToggle}
                            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                            {t("more")}
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && <AnnouncementModal onClose={handleModalToggle} />}
        </>
    );
}
