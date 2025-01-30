import React from "react";

const ContactUs = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            {/* Title Section */}
            <div className="text-center mb-6">
                <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-10 rounded-xl shadow-md max-w-6xl mx-auto text-center">
                {/* Support Message */}
                <p className="text-gray-700 text-lg">
                    Our member support is here to support you 24 hours a day, 7 days per week. 
                    Before you contact us, please check our{" "}
                    <a href="#" className="text-blue-500 font-semibold hover:underline">FAQ</a> and{" "}
                    <a href="#" className="text-blue-500 font-semibold hover:underline">Info Centre</a>{" "}
                    (User guides) to see if your question has already been answered.
                </p>

                {/* Language Icons */}
                <p className="text-gray-500 text-sm mt-4">
                    Should you wish to contact our Member Support in your preferred language.
                </p>

                <div className="flex justify-center space-x-4 mt-4">
                    <img src="https://cdn-icons-png.flaticon.com/128/197/197484.png" alt="Flag 1" className="h-6 w-6"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="Flag 2" className="h-6 w-6"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/197/197507.png" alt="Flag 3" className="h-6 w-6"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/197/197560.png" alt="Flag 4" className="h-6 w-6"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/197/197571.png" alt="Flag 5" className="h-6 w-6"/>
                </div>

                {/* Contact Methods */}
                <div className="flex justify-center space-x-16 mt-8">
                    {/* Live Chat */}
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/1374/1374128.png" alt="LiveChat Icon" className="h-10 w-10"/>
                        <p className="text-orange-500 text-lg font-semibold mt-2">LiveChat</p>
                        <a href="#" className="text-blue-500 text-sm hover:underline">Click here</a>
                    </div>

                    {/* Telegram */}
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Telegram Icon" className="h-10 w-10"/>
                        <p className="text-orange-500 text-lg font-semibold mt-2">Telegram</p>
                        <a href="#" className="text-blue-500 text-sm hover:underline">Click here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
