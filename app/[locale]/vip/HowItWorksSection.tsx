const HowItWorksSection = () => {
    return (
        <section className="bg-[#0b2134] py-8 md:py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-white">
                <h2 className="text-lg sm:text-xl font-bold text-yellow-500 mb-4">
                    How Does It Work?
                </h2>
                <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-6">
                    BK8 VIP Journey
                </h3>

                <ol className="list-decimal list-inside space-y-4 text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
                    <li>
                        Regular members will automatically get upgraded to become VIP members
                        after fulfilling the deposit requirement within the given timeframe.
                    </li>
                    <li>
                        Allow the system to verify and update your data within 2 working days.
                    </li>
                    <li>Kick back, relax, and start enjoying your VIP rewards!</li>
                </ol>

                <h3 className="text-base sm:text-lg font-semibold text-white mt-8">
                    To all members upgrading for the first time,
                </h3>
                <p className="text-gray-300 mt-4 leading-6 sm:leading-7 text-sm sm:text-base">
                    For your safety and security, you are required to provide all necessary details
                    as stated in the BK8 VIP upgrading policy. It will take up to 2 business working
                    days for our team to review and verify the information provided. We will then
                    update your latest status and information in our system, and after that, your
                    journey as a VIP member will begin!
                </p>
                <p className="text-gray-300 mt-4 leading-6 sm:leading-7 text-sm sm:text-base">
                    To ensure that the transformation goes smoothly and efficiently, please adhere
                    to all upgrading regulations. Feel free to contact our{' '}
                    <a href="#customer-care" className="text-yellow-500 underline">
                        Customer Care
                    </a>{' '}
                    agents should you require assistance.
                </p>
            </div>
        </section>
    );
};

export default HowItWorksSection;
