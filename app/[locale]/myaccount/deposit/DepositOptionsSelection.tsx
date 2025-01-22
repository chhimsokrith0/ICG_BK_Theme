import React from 'react';

interface DepositOptionsSelectionProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const DepositOptionsSelection = ({ selectedOption, setSelectedOption }: DepositOptionsSelectionProps) => {
    const depositOptions = [
        {
            name: 'Bank Transfer',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532717/Bank_Transfer_mbbsqj.svg',
        },
        {
            name: 'RQR',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532774/RQR_dmeipe.svg',
        },
        {
            name: 'E-Wallet',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532837/E-Wallet_cmrmmj.svg',
        },
    ];

    return (
        <div className="mb-6 max-w-lg">
            <p className="text-gray-700 font-medium mb-3">
                Deposit Options <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-3 gap-4">
                {depositOptions.map((option) => (
                    <button
                        key={option.name}
                        onClick={() => setSelectedOption(option.name)}
                        className={`p-4 rounded-md shadow-md text-center ${
                            selectedOption === option.name
                                ? 'border-2 border-orange-500 bg-orange-100'
                                : 'border border-gray-200 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex flex-col items-center">
                            <img src={option.image} alt={option.name} className="w-10 h-10 mb-2" />
                            <span className="font-medium text-gray-700">{option.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DepositOptionsSelection;
