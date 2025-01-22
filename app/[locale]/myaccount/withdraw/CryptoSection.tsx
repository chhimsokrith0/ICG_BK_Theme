import React, { useState } from 'react';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import AddressModal from './AddressModal';
const CryptoSection = () => {

    const [selectedOption, setSelectedOption] = useState('USDT-TRC20'); // Default selected option

    const options = [
        {
            name: 'USDT-TRC20',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737551296/USDT-TRC20_lxfgqc.png',
        },
        {
            name: 'ETH-ERC20',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737551295/ETH-ERC20_epq902.png',
        },
        {
            name: 'BTC-BTC',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737551295/BTC-BTC_wkxxfk.webp',
        },
    ];

    const handleOptionClick = (name: string) => {
        setSelectedOption(name);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Channel *</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                    <option value="Channel 1">Channel 1</option>
                    <option value="Channel 2">Channel 2</option>
                </select>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                {options.map((option) => (
                    <button
                        key={option.name}
                        onClick={() => handleOptionClick(option.name)}
                        className={`p-4 rounded-md text-center ${selectedOption === option.name
                            ? 'border-2 border-orange-500 '
                            : 'border border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        <div className='flex flex-col items-center'>
                            <img
                                src={option.image}
                                alt={option.name}
                                className="w-10 h-10 mb-2"
                            />
                            <span className="text-sm">{option.name}</span>
                        </div>

                    </button>
                ))}
            </div>

            <div className="max-w-md mx-auto">
                {/* Current Exchange Rate */}
                <div className="mb-4">
                    <p className="text-gray-700 text-sm">
                        <span className="font-medium">CHAIN:</span> TRC20
                    </p>
                    <p className="text-gray-700 text-sm">
                        <span className="font-medium">USDT 1 = USD 1.00</span>
                    </p>
                    <div className="flex items-center text-gray-700 text-sm">
                        <span className="font-medium">Guaranteed Until:</span>
                        <span className="ml-2">20:14</span>
                        <button className="ml-2">
                            <ArrowPathIcon className="w-5 h-5 text-gray-400 hover:text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Address Field */}
                <div className="mb-4 relative">
                    <label className="block mb-2 font-medium text-gray-700">Address *</label>
                    <div className="flex items-center">
                        <select className="flex-1 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Address</option>
                            <option value="1">Address 1</option>
                            <option value="2">Address 2</option>
                        </select>
                        <button onClick={handleOpenModal} className="ml-2 p-2 bg-gray-100 rounded-md border border-gray-300 text-gray-500 hover:text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Modal Component */}
                <AddressModal isOpen={isModalOpen} onClose={handleCloseModal} />

                {/* Amount Field */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium text-gray-700">Amount (USD) *</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Amount MIN: 150 / MAX: 10,000"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Daily Limit Balance: 10,000 / Daily Count Balance: 10
                    </p>
                </div>

                {/* Static Amount Field */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium text-gray-700">Amount (USDT) *</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        placeholder="USDT"
                        value="USDT"
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <button className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CryptoSection;