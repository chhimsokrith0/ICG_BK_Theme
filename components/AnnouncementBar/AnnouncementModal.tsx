'use client';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

interface AnnouncementModalProps {
    onClose: () => void;
}

const generalAnnouncements = [
    {
        message:
            'Happy Chinese New Year to all BK8 members! May the new year bring you good luck and endless winnings!',
        date: '19/01/2025',
    },
    {
        message:
            'Stay active and stand a chance to win ang paos up to MYR 888 from 28th January to 30th January!',
        date: '19/01/2025',
    },
    {
        message:
            'Invite your friends to join BK8 and win big together this Chinese New Year! Up to MYR 4,888 referral bonus awaits!',
        date: '19/01/2025',
    },
    {
        message:
            'Get free bets and unlock mystery boxes by placing bets on your favorite sports team with BK8 Sports!',
        date: '19/01/2025',
    },
];

const maintenanceAnnouncements = [
    {
        message: 'Scheduled maintenance on 22nd January from 00:00 to 06:00 (GMT+8).',
        date: '19/01/2025',
    },
    {
        message:
            'Certain games may experience intermittent downtime during maintenance on 23rd January.',
        date: '19/01/2025',
    },
];

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState<'General' | 'Maintenance'>('General');

    const announcements =
        activeTab === 'General' ? generalAnnouncements : maintenanceAnnouncements;

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        return () => {
            document.body.style.overflow = ''; // Re-enable scrolling when the modal is closed
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
                className="bg-white rounded-lg shadow-lg max-w-6xl w-full p-4 sm:p-6 overflow-y-auto scrollbar-hide max-h-[90vh]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Header with Tabs */}
                <div className="flex flex-wrap justify-between items-center px-4 py-3 border-b">
                    {/* Tabs */}
                    <div className="flex flex-wrap space-x-2 sm:space-x-4">
                        <button
                            className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium ${activeTab === "General"
                                    ? "bg-orange-500 text-white shadow"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => setActiveTab("General")}
                        >
                            General
                        </button>
                        <button
                            className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium ${activeTab === "Maintenance"
                                    ? "bg-orange-500 text-white shadow"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => setActiveTab("Maintenance")}
                        >
                            Maintenance
                        </button>
                    </div>

                    {/* Close Button */}
                    <button
                        className="text-gray-500 hover:text-gray-700 p-2"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* Announcements */}
                <div className="py-4 space-y-4">
                    {announcements.map((announcement, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-100 rounded-lg shadow-sm"
                        >
                            <p className="text-sm text-gray-800">{announcement.message}</p>
                            <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-wrap justify-between items-center px-4 py-3 border-t space-y-3 sm:space-y-0">
                    <label className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            className="mr-2"
                        />
                        Don’t Show Again
                    </label>
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
        ,
        document.body
    );
};

export default AnnouncementModal;
