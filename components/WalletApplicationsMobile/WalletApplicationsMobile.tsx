import React from 'react';
import WalletBalance from './WalletBalance';
const WalletApplicationsMobile = () => {
  

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            {/* Wallet Balance Section */}
            <WalletBalance />

            {/* Applications Section */}
            <div className="grid grid-cols-4 gap-y-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737716972/Restore_ziafo3.gif" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-2">Restore</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717089/Deposit_acvffy.gif" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-2">Deposit</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717160/Transfer_wky3lw.gif" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-2">Transfer</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717229/Withdraw_vvmcqc.gif" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-2">Withdraw</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717289/History_hmkasy.gif" alt="" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-2">History</p>
                </div>
                <div className="flex flex-col items-center relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-blue-500">
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717411/Message_j5ak8r.gif" alt="" />
                    </div>
                    <span className="absolute -top-1 right-4 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow">
                        0
                    </span>
                    <p className="text-sm text-gray-600 font-medium mt-2">Message</p>
                </div>
            </div>

            {/* Less Applications Section */}
            <div className="flex justify-center mt-6">
                <button className="text-blue-500 text-sm font-medium flex items-center hover:underline">
                    <i className="fas fa-chevron-up mr-1"></i> Less applications
                </button>
            </div>
        </div>
    );
};

export default WalletApplicationsMobile;
