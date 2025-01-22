import React from 'react';

interface BankSelectionProps {
    selectedBank: string;
    setSelectedBank: (bank: string) => void;
}

const BankSelection = ({ selectedBank, setSelectedBank }: BankSelectionProps) => {
    const banks = [
        {
            name: 'Wing Bank',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/wingbank_fm7akz.png',
        },
        {
            name: 'ABA Bank',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533468/aba_bank_logo_d2gbez.jpg',
        },
        {
            name: 'Acleda Bank',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/ac_bank_i41ip4.jpg',
        },
    ];

    return (
        <div className="mb-6 mt-4 max-w-lg">
            <p className="text-gray-700 font-medium mb-3">
                Choose Bank <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-3 gap-4">
                {banks.map((bank) => (
                    <button
                        key={bank.name}
                        onClick={() => setSelectedBank(bank.name)}
                        className={`p-4 rounded-md shadow-md text-center ${
                            selectedBank === bank.name
                                ? 'border-2 border-blue-500'
                                : 'border border-gray-200 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex flex-col items-center">
                            <img src={bank.image} alt={bank.name} className="w-16 h-16 rounded-full mb-2" />
                            <span className="font-medium text-gray-700">{bank.name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BankSelection;
