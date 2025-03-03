import React, { useState } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import PinCodeModal from './PinCodeModal';
import CryptoSection from './CryptoSection';
import { useTranslations } from 'next-intl';
interface WithdrawOptionsSelectionProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

interface BankOptionProps {
    name: string;
    image: string;
}

const WithdrawOptions = ({ selectedOption, setSelectedOption }: WithdrawOptionsSelectionProps) => {
    
    const t = useTranslations('myaccount.withdraw.WithdrawOptions');

    const withdrawOptions: BankOptionProps[] = t.raw('options');


    
    // const withdrawOptions = [
    //     {
    //         name: 'Bank Transfer',
    //         image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557008/T_rd1wjd.gif',
    //     },
    //     {
    //         name: 'Crypto',
    //         image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557404/bitcoin_rlsts5.gif',
    //     },
    //     {
    //         name: 'E-Wallet',
    //         image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557111/wallet_dtgebd.gif',
    //     },
    // ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mb-6 max-w-lg p-6">
            <p className="text-gray-700 font-medium mb-3">
                Withdraw Options <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
                {withdrawOptions.map((option) => (
                    <button
                        key={option.name}
                        onClick={() => setSelectedOption(option.name)}
                        className={`p-4 rounded-md shadow-md text-center ${selectedOption === option.name
                            ? 'border-2 border-orange-500'
                            : 'border border-gray-200 hover:bg-gray-100'
                            }`}
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={option.image}
                                alt={option.name}
                                className="w-16 h-16 mb-2"
                            />
                            <span className="font-medium text-gray-700">{option.name}</span>
                        </div>
                    </button>
                ))}
            </div>


            {selectedOption === t('options.0.name') && (
                <>
                    <div className="mt-4">
                        <p className="text-red-500 text-sm flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            {t('pinCodeWarning.message')}
                            <button
                                onClick={handleOpenModal}
                                className="text-blue-500 underline hover:text-blue-700 ml-1"
                            >
                                {t('pinCodeWarning.setPin')}
                            </button>
                            {t('pinCodeWarning.instruction')}
                        </p>
                        <PinCodeModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
                    </div>
                </>
            )}

            {selectedOption === t('options.2.name') && (
                <>
                    <div className="mt-4">
                        <p className="text-red-500 text-sm flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            {t('pinCodeWarning.message')}
                            <button
                                onClick={handleOpenModal}
                                className="text-blue-500 underline hover:text-blue-700 ml-1"
                            >
                                {t('pinCodeWarning.setPin')}
                            </button>
                            {t('pinCodeWarning.instruction')}
                        </p>
                        <PinCodeModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
                    </div>
                </>
            )}

            {selectedOption === t('options.1.name') && (
                <CryptoSection />
            )}


        </div>
    );
};

export default WithdrawOptions;
