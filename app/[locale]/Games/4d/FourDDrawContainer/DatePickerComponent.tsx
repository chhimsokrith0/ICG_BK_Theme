import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    selectedDate: Date | null; // Allow null
    setSelectedDate: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-semibold">Draw Date</label>
            <div className="relative">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="w-44 px-4 py-3 border rounded-lg bg-white shadow-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    popperPlacement="bottom-end"
                    calendarClassName="rounded-lg shadow-lg border border-gray-300 bg-white"
                    dayClassName={(date) =>
                        'w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-150 ease-in-out'
                    }
                    todayButton="Go to Today"
                    showPopperArrow={false}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DatePickerComponent;
