import React, { useState } from 'react';
import DatePickerComponent from './DatePickerComponent';
import ProviderCard from './ProviderCard';
import { providers } from './ProviderData';

const FourDDrawContainer: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date('2025-01-15'));

    return (
        <section className="p-6 bg-gray-100 rounded-lg max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-800 font-medium shadow-sm hover:bg-gray-100">
                        Draw Result
                    </button>
                    <button className="px-6 py-3 bg-gray-200 border border-gray-300 rounded-md text-gray-500 font-medium hover:bg-gray-300">
                        Payout
                    </button>
                </div>
                <DatePickerComponent
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {providers.map((provider, index) => (
                    <ProviderCard key={index} provider={provider} />
                ))}
            </div>
        </section>
    );
};

export default FourDDrawContainer;
