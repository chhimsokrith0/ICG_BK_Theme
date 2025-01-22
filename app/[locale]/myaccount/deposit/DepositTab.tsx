// 'use client';
// import React, { useState } from 'react';

// const DepositTab = () => {

//     const [selectedTab, setSelectedTab] = useState('Normal Deposit');

//     const [selectedOption, setSelectedOption] = useState('Bank Transfer');
//     const [selectedBank, setSelectedBank] = useState('');

//     return (
//         <div className="bg-white p-6 ml-2 mt-2 rounded-lg shadow-md w-full">
//             <div className='max-w-lg'>
//                 <div>
//                     {/* Tabs */}
//                     <div className="flex mb-6 space-x-2">
//                         <button
//                             className={`flex-1 text-center py-2 rounded-t-md ${selectedTab === 'Normal Deposit'
//                                 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold'
//                                 : 'bg-gray-200 text-gray-600'
//                                 }`}
//                             onClick={() => setSelectedTab('Normal Deposit')}
//                         >
//                             <div className="flex items-center justify-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4"
//                                     fill="currentColor"
//                                     viewBox="0 0 50 50"
//                                 >
//                                     <path d="..." />
//                                 </svg>
//                                 <span>Normal Deposit</span>
//                             </div>
//                             <span className="text-xs font-normal">(5 minutes)</span>
//                         </button>
//                         <button
//                             className={`flex-1 text-center py-2 rounded-t-md ${selectedTab === 'Fast Deposit'
//                                 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold'
//                                 : 'bg-gray-200 text-gray-600'
//                                 }`}
//                             onClick={() => setSelectedTab('Fast Deposit')}
//                         >
//                             <div className="flex items-center justify-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4"
//                                     fill="currentColor"
//                                     viewBox="0 0 50 50"
//                                 >
//                                     <path d="..." />
//                                 </svg>
//                                 <span>Fast Deposit</span>
//                             </div>
//                             <span className="text-xs font-normal">(1 minute)</span>
//                         </button>
//                         <button
//                             className={`flex-1 text-center py-2 rounded-t-md ${selectedTab === 'Crypto Deposit'
//                                 ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold'
//                                 : 'bg-gray-200 text-gray-600'
//                                 }`}
//                             onClick={() => setSelectedTab('Crypto Deposit')}
//                         >
//                             <div className="flex items-center justify-center space-x-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4"
//                                     fill="currentColor"
//                                     viewBox="0 0 50 50"
//                                 >
//                                     <path d="..." />
//                                 </svg>
//                                 <span>Crypto Deposit</span>
//                             </div>
//                             <span className="text-xs font-normal">(15 minutes)</span>
//                         </button>
//                     </div>

//                     {/* Conditional Rendering for Normal Deposit */}
//                     {selectedTab === 'Normal Deposit' && (
//                         <div className="mb-6">
//                             <p className="text-gray-700 font-medium mb-3">
//                                 Deposit Options <span className="text-red-500">*</span>
//                             </p>
//                             <div className="grid grid-cols-3 gap-4">
//                                 {[
//                                     {
//                                         name: 'Bank Transfer',
//                                         image:
//                                             'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532717/Bank_Transfer_mbbsqj.svg',
//                                     },
//                                     {
//                                         name: 'RQR',
//                                         image:
//                                             'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532774/RQR_dmeipe.svg',
//                                     },
//                                     {
//                                         name: 'E-Wallet',
//                                         image:
//                                             'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737532837/E-Wallet_cmrmmj.svg',
//                                     },
//                                 ].map((option) => (
//                                     <button
//                                         key={option.name}
//                                         onClick={() => setSelectedOption(option.name)}
//                                         className={`p-4 rounded-md shadow-md text-center ${selectedOption === option.name
//                                                 ? 'border-2 border-orange-500 bg-orange-100'
//                                                 : 'border border-gray-200 hover:bg-gray-100'
//                                             }`}
//                                     >
//                                         <div className="flex flex-col items-center">
//                                             <img
//                                                 src={option.image}
//                                                 alt={option.name}
//                                                 className="w-10 h-10 mb-2"
//                                             />
//                                             <span className="font-medium text-gray-700">{option.name}</span>
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Conditional Rendering for Choose Bank */}
//                             {selectedOption === 'Bank Transfer' && (
//                                 <div className="mb-6 mt-4">
//                                     <p className="text-gray-700 font-medium mb-3">
//                                         Choose Bank <span className="text-red-500">*</span>
//                                     </p>
//                                     <div className="grid grid-cols-3 gap-4">
//                                         {[
//                                             {
//                                                 name: 'Wing Bank',
//                                                 image:
//                                                     'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/wingbank_fm7akz.png',
//                                             },
//                                             {
//                                                 name: 'Advanced Bank of Asia (ABA Bank)',
//                                                 image:
//                                                     'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533468/aba_bank_logo_d2gbez.jpg',
//                                             },
//                                             {
//                                                 name: 'Acleda Bank',
//                                                 image:
//                                                     'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737533469/ac_bank_i41ip4.jpg',
//                                             },
//                                         ].map((bank) => (
//                                             <button
//                                                 key={bank.name}
//                                                 onClick={() => setSelectedBank(bank.name)}
//                                                 className={`p-4 rounded-md shadow-md text-center ${selectedBank === bank.name
//                                                         ? 'border-2 border-blue-500 bg-blue-50'
//                                                         : 'border border-gray-200 hover:bg-gray-100'
//                                                     }`}
//                                             >
//                                                 <div className="flex flex-col items-center">
//                                                     <img
//                                                         src={bank.image}
//                                                         alt={bank.name}
//                                                         className="w-10 h-10 mb-2"
//                                                     />
//                                                     <span className="font-medium text-gray-700">{bank.name}</span>
//                                                 </div>
//                                             </button>
//                                         ))}
//                                     </div>
//                                     <p className="mt-2 text-xs text-gray-500">
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-4 h-4 inline mr-1"
//                                             fill="currentColor"
//                                             viewBox="0 0 50 50"
//                                         >
//                                             <path d="..." />
//                                         </svg>
//                                         Upload your deposit receipt for faster processing
//                                     </p>
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                 </div>


//             </div>

//             {/* Action Buttons */}
//             <div className="flex justify-left space-x-4">
//                 <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600">
//                     Submit
//                 </button>
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600">
//                     Upload Receipt
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default DepositTab;



'use client';
import React, { useState } from 'react';
import DepositTabs from './DepositTabs';
import DepositOptions from './DepositOptions';
import ActionButtons from './ActionButtons';
import FastDeposit from './FastDeposit';

const DepositTab = () => {
    const [selectedTab, setSelectedTab] = useState('Normal Deposit');
    const [selectedOption, setSelectedOption] = useState('Bank Transfer');
    const [selectedBank, setSelectedBank] = useState('');

    return (
        <div className="bg-white p-6 ml-2 mt-2 rounded-lg shadow-md w-full">
            <div>
                <div className='max-w-lg'>
                    {/* Tabs */}
                    <DepositTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                </div>

                {/* Deposit Options */}
                {selectedTab === 'Normal Deposit' && (
                    <>
                        <DepositOptions
                        />

                    </>
                )}

                {selectedTab === 'Fast Deposit' && (
                    <FastDeposit
                    />
                )}

            </div>

            {/* Action Buttons */}
            <ActionButtons />

        </div>
    );
};

export default DepositTab;
