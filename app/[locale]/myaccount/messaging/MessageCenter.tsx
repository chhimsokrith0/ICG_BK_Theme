'use client';

import React, { useState } from 'react';
import { faEnvelopeOpen, faTrash, faThumbtack, faFlag, faTimes  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';


interface Message {
    subject: string;
    date: string;
    remark: string;
    content: string; // Detailed content for the modal
}

const MessageCenter = () => {
    type TabName = 'Promotions' | 'Payment' | 'System' | 'Notification';
    const [activeTab, setActiveTab] = useState<TabName>('Promotions');
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    const tabs = [
        { name: 'Promotions' as TabName },
        { name: 'Payment' as TabName },
        { name: 'System' as TabName },
        { name: 'Notification' as TabName },
    ];

    const tabData: Record<TabName, Message[]> = {
        Promotions: [
            {
                subject: 'Special Promotion: Get Bonus Now!',
                date: '01/24/2025',
                remark: '',
                content: 'Don’t miss out on our special promotion! Get a bonus today.',
            },
        ],
        Payment: [
            {
                subject: 'Payment Successful',
                date: '01/23/2025',
                remark: '',
                content: 'Your payment has been processed successfully.',
            },
        ],
        System: [
            {
                subject: 'System Maintenance Notice',
                date: '01/22/2025',
                remark: '',
                content: 'Our system will undergo maintenance on 01/25/2025 from 2 AM to 4 AM.',
            },
        ],
        Notification: [
            {
                subject: 'Welcome to BK8! Endless Fun & Fortune Await! / សូមស្វាគមន៍មកកាន់ BK8! សប្បាយរីករាយ និងសំណាងគ្មានទីបញ្ចប់កំពុងរង់ចាំអ្នក!',
                date: '06/01/2025 13:13',
                remark: '',
                content: `
                    Dear New Member,

                    Welcome to BK8! We’re thrilled that you have chosen us as your one-hub online gaming destination. To show our appreciation, we’re offering a variety of exclusive bonuses, such as <Welcome Bonus up to USD 2880>, <Crypto Deposit Bonus> and <Weekly Cashback> which you won’t find anywhere else!

                    In addition to these incredible promos, you can now be upgraded to a VIP member and enjoy special perks simply by fulfilling the required deposit amount! Start playing and win big today!


                    Warm regards,
                    BK8 Customer Support


                    សមាជិកថ្មីជាទីគោរព!

                    សូមស្វាគមន៍មកកាន់ BK8! យើងរីករាយណាស់ដែលអ្នកបានជ្រើសរើសយើងក្នុងការលេងហ្គេមតាមអ៊ីនធឺណិតរបស់អ្នក ហើយយើងចង់បង្ហាញពីសេចក្ដីសមនស្សរបស់យើងដោយផ្តល់ជូនអ្នកនូវប្រាក់រង្វាន់ជាច្រើនដូចជា <ប្រាក់ស្វាគមន៍រហូតដល់ USD 2880>, <គ្រិបតូ រូបិយប័ណ្ណអេឡិចត្រូនិច> និង <ប្រាក់រង្វាន់សង្គ្រោះប្រចាំសប្ដាហ៍> ដែលវេទិកាផ្សេងទៀតមិនមាន! ក្រៅពីអត្ថប្រយោជន៍ដែលមិនធ្លាប់មានពីមុនមក ឥឡូវនេះ អ្នកអាចត្រូវបានដំឡើងឋានៈជាសមាជិក VIP និងរីករាយជាមួយអត្ថប្រយោជន៍ដ៏មានកិត្យានុភាពបំផុត ដោយគ្រាន់តែទទួលបានចំនួនដាក់ប្រាក់គ្មានកំណត់! លេងឥឡូវនេះ ដើម្បីចាប់ផ្តើមទាំងអស់គ្នា!


                    ដោយក្តីគោរព,
                    ជំនួយអតិថិជន BK8
                    `,
            },
            {
                subject: 'Welcome to BK8! Endless Fun & Fortune Await! / សូមស្វាគមន៍មកកាន់ BK8! សប្បាយរីករាយ និងសំណាងគ្មានទីបញ្ចប់កំពុងរង់ចាំអ្នក!',
                date: '06/01/2025 13:13',
                remark: '',
                content: `
                    Dear New Member,

                    Welcome to BK8! We’re thrilled that you have chosen us as your one-hub online gaming destination. To show our appreciation, we’re offering a variety of exclusive bonuses, such as <Welcome Bonus up to USD 2880>, <Crypto Deposit Bonus> and <Weekly Cashback> which you won’t find anywhere else!

                    In addition to these incredible promos, you can now be upgraded to a VIP member and enjoy special perks simply by fulfilling the required deposit amount! Start playing and win big today!


                    Warm regards,
                    BK8 Customer Support


                    សមាជិកថ្មីជាទីគោរព!

                    សូមស្វាគមន៍មកកាន់ BK8! យើងរីករាយណាស់ដែលអ្នកបានជ្រើសរើសយើងក្នុងការលេងហ្គេមតាមអ៊ីនធឺណិតរបស់អ្នក ហើយយើងចង់បង្ហាញពីសេចក្ដីសមនស្សរបស់យើងដោយផ្តល់ជូនអ្នកនូវប្រាក់រង្វាន់ជាច្រើនដូចជា <ប្រាក់ស្វាគមន៍រហូតដល់ USD 2880>, <គ្រិបតូ រូបិយប័ណ្ណអេឡិចត្រូនិច> និង <ប្រាក់រង្វាន់សង្គ្រោះប្រចាំសប្ដាហ៍> ដែលវេទិកាផ្សេងទៀតមិនមាន! ក្រៅពីអត្ថប្រយោជន៍ដែលមិនធ្លាប់មានពីមុនមក ឥឡូវនេះ អ្នកអាចត្រូវបានដំឡើងឋានៈជាសមាជិក VIP និងរីករាយជាមួយអត្ថប្រយោជន៍ដ៏មានកិត្យានុភាពបំផុត ដោយគ្រាន់តែទទួលបានចំនួនដាក់ប្រាក់គ្មានកំណត់! លេងឥឡូវនេះ ដើម្បីចាប់ផ្តើមទាំងអស់គ្នា!


                    ដោយក្តីគោរព,
                    ជំនួយអតិថិជន BK8
                    `,
            },
        ],
    };

    const handleTabClick = (tabName: TabName) => {
        setActiveTab(tabName);
        setMessages(tabData[tabName]);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-screen relative">
            {/* Tabs */}
            <div className="flex border-b gap-2 border-gray-300 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => handleTabClick(tab.name)}
                        className={`px-6 py-2 rounded-t-md font-medium ${activeTab === tab.name
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                            }`}
                    >
                        {tab.name} ({tabData[tab.name].length})
                    </button>
                ))}
            </div>

            {/* Table Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    {/* Select/Unselect All Section */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="selectAll"
                            className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="selectAll" className="text-gray-500 text-sm font-medium">
                            Select / Unselect All
                        </label>
                    </div>

                    {/* Actions Section */}
                    <div className="flex space-x-6 items-center">
                        <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm font-medium">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="w-5 h-5 mr-2" />
                            Mark As Read
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-gray-700 text-sm font-medium">
                            <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" />
                            Delete
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border-spacing-0">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-4 py-3 text-gray-700 font-medium">Subject</th>
                                <th className="px-4 py-3 text-gray-700 font-medium">Date</th>
                                <th className="px-4 py-3 text-gray-700 font-medium text-center">Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.length > 0 ? (
                                messages.map((message, index) => (
                                    <tr key={index} className="border-b">
                                        <td
                                            className="px-4 py-3 text-gray-500 cursor-pointer "
                                            onClick={() => setSelectedMessage(message)}
                                        >
                                            {message.subject}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">{message.date}</td>
                                        <td className="px-4 py-3 text-gray-700 flex justify-center space-x-4">
                                            <button>
                                                <FontAwesomeIcon
                                                    icon={faThumbtack}
                                                    className="text-gray-500 hover:text-gray-700"
                                                />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon
                                                    icon={faFlag}
                                                    className="text-gray-500 hover:text-gray-700"
                                                />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="text-gray-500 hover:text-gray-700"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-4 py-8 text-center text-gray-400 font-medium"
                                    >
                                        0 message(s)
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[200]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative"
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedMessage(null)}
                        >
                            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                        </button>
                        <h2 className="text-lg font-bold text-gray-800 mb-4">
                            {selectedMessage.subject}
                        </h2>
                        <p className="text-gray-700 whitespace-pre-line">{selectedMessage.content}</p>
                    </motion.div>
                </div>
            )}

        </div>
    );
};

export default MessageCenter;
