// import React, { useState } from 'react';
// import { InformationCircleIcon, PlusIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
// interface DepositOptionsProps {
//     selectedOption: string;
//     setSelectedOption: (option: string) => void;
//     selectedBank: string;
//     setSelectedBank: (bank: string) => void;
// }

// const DepositOptions = ({ selectedOption, setSelectedOption, selectedBank, setSelectedBank }: DepositOptionsProps) => {
//     const depositOptions = [
//         {
//             name: 'Bank Transfer',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532717/Bank_Transfer_mbbsqj.svg',
//         },
//         {
//             name: 'RQR',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532774/RQR_dmeipe.svg',
//         },
//         {
//             name: 'E-Wallet',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532837/E-Wallet_cmrmmj.svg',
//         },
//     ];

//     const banks = [
//         {
//             name: 'Wing Bank',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/wingbank_fm7akz.png',
//         },
//         {
//             name: 'Advanced Bank of Asia (ABA Bank)',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533468/aba_bank_logo_d2gbez.jpg',
//         },
//         {
//             name: 'Acleda Bank',
//             image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/ac_bank_i41ip4.jpg',
//         },
//     ];

//     return (
//         <div>
//             {/* Deposit Options */}
//             <div className="mb-6 max-w-lg">
//                 <p className="text-gray-700 font-medium mb-3">
//                     Deposit Options <span className="text-red-500">*</span>
//                 </p>
//                 <div className="grid grid-cols-3 gap-4">
//                     {depositOptions.map((option) => (
//                         <button
//                             key={option.name}
//                             onClick={() => setSelectedOption(option.name)}
//                             className={`p-4 rounded-md shadow-md text-center ${selectedOption === option.name
//                                 ? 'border-2 border-orange-500 bg-orange-100'
//                                 : 'border border-gray-200 hover:bg-gray-100'
//                                 }`}
//                         >
//                             <div className="flex flex-col items-center">
//                                 <img
//                                     src={option.image}
//                                     alt={option.name}
//                                     className="w-10 h-10 mb-2"
//                                 />
//                                 <span className="font-medium text-gray-700">{option.name}</span>
//                             </div>
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Choose Bank */}
//             {selectedOption === 'Bank Transfer' && (
//                 <div className="mb-6 mt-4 max-w-lg">
//                     <p className="text-gray-700 font-medium mb-3">
//                         Choose Bank <span className="text-red-500">*</span>
//                     </p>
//                     <div className="grid grid-cols-3 gap-4">
//                         {banks.map((bank) => (
//                             <button
//                                 key={bank.name}
//                                 onClick={() => setSelectedBank(bank.name)}
//                                 className={`p-4 rounded-md shadow-md text-center ${selectedBank === bank.name
//                                     ? 'border-2 border-blue-500 bg-blue-50'
//                                     : 'border border-gray-200 hover:bg-gray-100'
//                                     }`}
//                             >
//                                 <div className="flex flex-col items-center">
//                                     <img src={bank.image} alt={bank.name} className="w-10 h-10 mb-2" />
//                                     <span className="font-medium text-gray-700">{bank.name}</span>
//                                 </div>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Wing Bank Details */}
//             {selectedBank === 'Wing Bank' && (
//                 <div className="mt-6 p-4 max-w-3xl">
//                     <p className="text-gray-700 font-medium mb-3">Deposit Bank Account <span className="text-red-500">*</span></p>
//                     <div className="flex items-center space-x-4 mb-3">
//                         <div className="flex-1 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
//                             <span className="text-gray-700">RATHA SEM</span>
//                             <button className="text-blue-500 hover:text-blue-700">
//                                 {/* Replace SVG with Heroicons' Clipboard Copy Icon */}
//                                 <i className="fa-regular fa-copy text-blue-500 text-lg hover:text-blue-700"></i>
//                             </button>
//                         </div>
//                         <div className="flex-1 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
//                             <span className="text-gray-700">03379934</span>
//                             <button className="text-blue-500 hover:text-blue-700">
//                                 {/* Replace SVG with Heroicons' Clipboard Copy Icon */}
//                                 <i className="fa-regular fa-copy text-blue-500 text-lg hover:text-blue-700"></i>
//                             </button>
//                         </div>
//                     </div>



//                     <div className="flex justify-center items-center mb-4 relative">
//                         <div className="border-2 border-gray-300 rounded-lg p-2">
//                             <img
//                                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737538057/mbqr20240217053258926_srchj5.jpg" // Replace with the actual QR code image
//                                 alt="QR Code"
//                                 className="w-60 h-60 rounded-lg"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="text-gray-700 font-medium block mb-2">
//                             Deposit Amount <span className="text-red-500">*</span>
//                         </label>
//                         <div className="flex items-center space-x-2 mb-2">
//                             <input
//                                 type="number"
//                                 placeholder="Amount MIN: 5.00 / MAX: 50,000.00"
//                                 className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <button className="text-gray-500 hover:text-gray-700">
//                                 <InformationCircleIcon className="w-5 h-5" />
//                             </button>
//                             <span className="text-sm text-gray-500">Min/Max Limit: 5.00/50,000.00</span>
//                         </div>
//                         <p className="text-sm text-red-500 mt-1">
//                             Deposit amount must be greater than the minimum deposit amount.
//                         </p>
//                         <div className="flex space-x-2 mt-2">
//                             {['5', '10', '20', '50', '100'].map((value) => (
//                                 <button
//                                     key={value}
//                                     className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                 >
//                                     {value}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className="text-gray-700 font-medium block mb-2">
//                             Sender Bank <span className="text-red-500">*</span>
//                             <button className="ml-2 text-gray-500 hover:text-gray-700">
//                                 <InformationCircleIcon className="w-4 h-4 inline" />
//                             </button>
//                         </label>
//                         <div className="flex items-center space-x-2">
//                             <select
//                                 className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             >
//                                 <option value="">Please select</option>
//                                 <option value="Wing Bank">Wing Bank</option>
//                                 <option value="ABA Bank">ABA Bank</option>
//                                 <option value="Acleda Bank">Acleda Bank</option>
//                             </select>
//                             <button className="text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded-md shadow">
//                                 <PlusIcon className="w-5 h-5" />
//                             </button>
//                         </div>
//                         <p className="text-xs text-red-500 mt-1">Please add your bank account</p>
//                         <p className="text-xs text-gray-500 mt-1">
//                             <ArrowUpTrayIcon className="w-4 h-4 inline mr-1" />
//                             Upload your deposit receipt for faster processing
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DepositOptions;


import React, { useState } from 'react';
import DepositOptionsSelection from './DepositOptionsSelection';
import BankSelection from './BankSelection';
import WingBankDetails from './WingBankDetails';

const DepositOptions = () => {
    const [selectedOption, setSelectedOption] = useState('Bank Transfer');
    const [selectedBank, setSelectedBank] = useState('');

    return (
        <div>
            <DepositOptionsSelection
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            {selectedOption === 'Bank Transfer' && (
                <BankSelection
                    selectedBank={selectedBank}
                    setSelectedBank={setSelectedBank}
                />
            )}
            {selectedBank === 'Wing Bank' && <WingBankDetails />}
            {selectedBank === 'Advanced Bank of Asia (ABA Bank)' && <WingBankDetails />}
            {selectedBank === 'Acleda Bank' && <WingBankDetails />}
        </div>
    );
};

export default DepositOptions;
