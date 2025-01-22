import React from 'react';

interface DepositOptionsSelectionProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const DepositOptionsSelection = ({ selectedOption, setSelectedOption }: DepositOptionsSelectionProps) => {
    const depositOptions = [
        {
            name: 'Bank Transfer',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557008/T_rd1wjd.gif',
        },
        {
            name: 'RQR',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557075/qr-code_d9giqk.gif',
        },
        {
            name: 'E-Wallet',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557111/wallet_dtgebd.gif',
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
                                ? 'border-2 border-orange-500 '
                                : 'border border-gray-200 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex flex-col items-center">
                            <img src={option.image} alt={option.name} className="w-16 h-16 mb-2" />
                            <span className="font-medium text-gray-700">{option.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DepositOptionsSelection;
