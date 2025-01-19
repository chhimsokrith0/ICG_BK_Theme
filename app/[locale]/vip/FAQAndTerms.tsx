const FAQAndTerms = () => {
    return (
        <section className="bg-[#0b2134] py-8 md:py-16">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 px-4 md:px-6">
                {/* FAQ Section */}
                <div className="w-full lg:w-1/2 bg-[#162b36] p-4 md:p-6 rounded-md text-gray-300 opacity-90">
                    <h2 className="text-base md:text-lg font-semibold text-yellow-500 mb-4">FAQ</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-white text-sm md:text-base">
                                How do I upgrade to BK8 VIP?
                            </h3>
                            <p className="text-sm md:text-base">
                                There are multiple ways to become a BK8 VIP member:
                                <br /> (1) By depositing the required amount within the stated timeframe
                                <br /> (2) By special invite
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm md:text-base">
                                Can BK8 VIP member reserve annual rewards?
                            </h3>
                            <p className="text-sm md:text-base">
                                All rewards are based on a first come first serve basis and while stock lasts.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm md:text-base">
                                How can the deposit amount be calculated?
                            </h3>
                            <p className="text-sm md:text-base">
                                Deposit and turnover requirements will be based on the accumulated amount
                                from the first day until the last day of the respective month.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm md:text-base">
                                When can I start enjoying the benefits as a BK8 VIP member?
                            </h3>
                            <p className="text-sm md:text-base">
                                Members are entitled to enjoy the special promotions and benefits starting
                                from the first day after successfully upgrading to the VIP level.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions Section with Image */}
                <div className="w-full lg:w-1/2 bg-[#162b36] p-4 md:p-6 rounded-md text-gray-300 opacity-90 relative flex flex-col">
                    <div className="lg:flex-1">
                        <h2 className="text-base md:text-lg font-semibold text-yellow-500 mb-4">Terms & Conditions</h2>
                        <p className="text-sm md:text-base">
                            BK8 reserves the right to alter, cancel, terminate or suspend the Redemption or any
                            part thereof or any part of the applicable terms and conditions from time to time,
                            with or without any prior notice.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Members participating in the VIP program must accept and comply with the above rules
                            and terms as well as all relevant rules and terms of the website implemented by BK8.
                        </p>
                        <p className="text-white mt-6 text-sm md:text-base">General BK8 Terms & Conditions apply.</p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-[-20px] lg:right-[-40px] hidden lg:block">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196199/faq-img_meudwy.png"
                            alt="VIP Model"
                            className="w-[150px] md:w-[180px] lg:w-[250px] h-auto mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAndTerms;
