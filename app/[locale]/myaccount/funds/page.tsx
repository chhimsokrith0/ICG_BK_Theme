'use client'
import WalletApplicationsMobile from "@/components/WalletApplicationsMobile/WalletApplicationsMobile";
import HeaderBarWithMenu from "../HeaderBarWithMenu";
import React, { useState } from 'react';
const Page = () => {
    const verificationItems = [
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif",
            label: "Profile",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554069/email-file_zpdjcv.gif",
            label: "Email",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722266/mobile-verification_tk5kpz.gif",
            label: "Phone",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722266/documents-verification_tk5kpz.gif",
            label: "Documents",
        },
    ];

    const actions = [
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717089/Deposit_acvffy.gif",
            label: "Deposit",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717160/Transfer_wky3lw.gif",
            label: "Transfer",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717229/Withdraw_vvmcqc.gif",
            label: "Withdraw",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717289/History_hmkasy.gif",
            label: "History",
        },
    ];


    return (
        <>
            <div className="block lg:hidden">


                
                <HeaderBarWithMenu />


                <div className="flex items-center p-4 bg-white rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300 ease-in-out">
                    {/* User Icon */}
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
                            alt="User Icon"
                            className="w-8 h-8"
                        />
                    </div>

                    {/* Username */}
                    <div className="flex flex-col">
                        <p className="text-gray-500 text-sm">Welcome</p>
                        <p className="text-blue-600 text-lg font-bold">ssgighuy7y8sh</p>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center space-x-2 ml-auto">
                        {/* Normal Badge */}
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm shadow">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/Account_cdqdla.gif"
                                alt="Normal Icon"
                                className="w-8 h-8 mr-1"
                            />
                            <span className="text-gray-700 font-medium">Normal</span>
                        </div>

                        {/* VIP Badge */}
                        <div className="flex items-center bg-blue-500 px-3 py-1 rounded-full text-sm text-white shadow">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722164/crown_cn0wt2.gif"
                                alt="VIP Crown"
                                className="w-8 h-8 mr-1"
                            />
                            <span className="font-medium">&gt;100</span>
                        </div>
                    </div>
                </div>

                <WalletApplicationsMobile />

                <br />

                <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center space-x-4">
                    {/* Title */}
                    <p className="text-gray-800 font-semibold text-sm">User Verification</p>

                    {/* Icons Section */}
                    <div className="flex items-center space-x-3">
                        {verificationItems.map((item, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                                title={item.label}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="w-6 h-6"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg">
                    {actions.map((action, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition-colors"
                        >
                            <img
                                src={action.icon}
                                alt={action.label}
                                className="w-20 h-20 mb-2"
                            />
                            <p className="text-sm font-medium text-gray-700">{action.label}</p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Page