import React, { useState } from "react";

const FastDeposit = () => {
    const [selectedOption, setSelectedOption] = useState("QR Pay");
    const [selectedBank, setSelectedBank] = useState("");

    const depositOptions = [
        {
            name: "QR Pay",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737540577/QR_pay_rpom2l.svg", // Replace with actual QR Pay image URL
        },
    ];

    const banks = [
        {
            name: "PiPay",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737540628/pipay_hg0hv4.png", // Replace with actual PiPay image URL
        },
    ];

    return (
        <div className="mt-6 p-4 bg-white rounded-lg max-w-72">
            {/* Deposit Options */}
            <div className="mb-6">
                <p className="text-gray-700 font-medium mb-3">
                    Deposit Options <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {depositOptions.map((option) => (
                        <button
                            key={option.name}
                            onClick={() => setSelectedOption(option.name)}
                            className={`p-4 rounded-md shadow-md text-center ${
                                selectedOption === option.name
                                    ? "border-2 border-orange-500 bg-orange-100"
                                    : "border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={option.image}
                                    alt={option.name}
                                    className="w-10 h-10 mb-2"
                                />
                                <span className="font-medium text-gray-700">{option.name}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Choose Bank */}
            {selectedOption && (
                <div className="mb-6">
                    <p className="text-gray-700 font-medium mb-3">
                        Choose Bank <span className="text-red-500">*</span>
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {banks.map((bank) => (
                            <button
                                key={bank.name}
                                onClick={() => setSelectedBank(bank.name)}
                                className={`p-4 rounded-md shadow-md text-center ${
                                    selectedBank === bank.name
                                        ? "border-2 border-blue-500 bg-blue-50"
                                        : "border border-gray-200 hover:bg-gray-100"
                                }`}
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={bank.image}
                                        alt={bank.name}
                                        className="w-10 h-10 mb-2"
                                    />
                                    <span className="font-medium text-gray-700">{bank.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* How to Deposit */}
            <div className="flex justify-end">
                <button className="text-gray-500 hover:text-gray-700 text-sm">
                    <i className="fas fa-question-circle mr-1"></i> How To Deposit
                </button>
            </div>
        </div>
    );
};

export default FastDeposit;
