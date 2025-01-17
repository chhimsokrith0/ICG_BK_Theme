import React from 'react';

interface Provider {
    name: string;
    date: string;
    icon: string;
    results: { first: string; second: string; third: string };
    special: string[];
    consolation: string[];
    extraSections?: { title: string; rows: { label: string; value: string }[] }[]; // Additional sections
    color: string;
}

interface ProviderCardProps {
    provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
    return (
        <div className={`rounded-lg shadow-md overflow-hidden ${provider.color}`}>
            <div className="p-4 flex items-center space-x-4">
                <img
                    loading="lazy"
                    src={provider.icon}
                    alt={provider.name}
                    className="w-12 h-12"
                />
                <div>
                    <h3 className="font-semibold text-lg">{provider.name}</h3>
                    <p className="text-sm">{provider.date}</p>
                </div>
            </div>
            <div className="bg-white p-4 text-gray-800 space-y-6">
                {/* First, Second, Third Section */}
                <div className="grid grid-cols-3 text-center gap-4">
                    {['1st', '2nd', '3rd'].map((rank, index) => (
                        <div key={index}>
                            <p className={`font-medium py-2 rounded-md ${provider.color}`}>
                                {rank}
                            </p>
                            <p>
                                {index === 0
                                    ? provider.results.first
                                    : index === 1
                                        ? provider.results.second
                                        : provider.results.third}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Special Section */}
                <div>
                    <h4 className={`text-center font-medium mb-2 py-2 rounded-md ${provider.color}`}>
                        Special
                    </h4>
                    <div className="grid grid-cols-5 gap-2 text-center text-sm">
                        {provider.special.map((value, idx) => (
                            <span key={idx} className="block py-1">
                                {value}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Consolation Section */}
                <div>
                    <h4 className={`text-center font-medium mb-2 py-2 rounded-md ${provider.color}`}>
                        Consolation
                    </h4>
                    <div className="grid grid-cols-5 gap-2 text-center text-sm">
                        {provider.consolation.map((value, idx) => (
                            <span key={idx} className="block py-1">
                                {value}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Extra Sections */}
                {provider.extraSections &&
                    provider.extraSections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`p-4 rounded-md ${provider.color} text-white text-sm`}
                        >
                            <h4 className="font-semibold text-center mb-2">{section.title}</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {section.rows.map((row, rowIdx) => (
                                    <div
                                        key={rowIdx}
                                        className="flex justify-between bg-white text-gray-800 px-2 py-1 rounded-md"
                                    >
                                        <span>{row.label}</span>
                                        <span>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProviderCard;
