'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import { useTranslations } from 'next-intl';

const ReferralSection: React.FC = () => {
    const t = useTranslations('myaccount.Sidebar.ReferralSection');
    return (
        <motion.div
            className="mt-14 p-6 bg-blue-50 rounded-lg text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={{
                backgroundImage: 'url(https://res.cloudinary.com/dfxqagrkk/image/upload/v1737527585/referral-background_machwz.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '219px',
                height: '273px',
            }}
        >
            <h3 className="text-sm font-bold text-gray-800">
                {t('title')}
            </h3>
            <p className="text-xs text-gray-600 mt-2">
                {t('description')}
            </p>
            <motion.div
                className="mt-4 flex justify-center items-center bg-white px-4 py-2 rounded-full shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <p className="text-lg font-bold text-blue-700 mr-2">{t('referralCode')}</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 underline text-sm hover:text-blue-700 flex items-center"
                >
                    <ArrowRightIcon className="w-6 h-6 text-blue-700" />
                </motion.button>

            </motion.div>
        </motion.div>
    );
};

export default ReferralSection;
