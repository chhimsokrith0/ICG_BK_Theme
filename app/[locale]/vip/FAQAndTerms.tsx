const FAQAndTerms = () => {
    return (
        <section className="bg-[#0b2134] py-16">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 px-6">
                {/* FAQ Section */}
                <div className="w-full lg:w-1/2 bg-[#162b36] p-6 rounded-md text-gray-300 opacity-90">
                    <h2 className="text-lg font-semibold text-yellow-500 mb-4">FAQ</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-white">How do I upgrade to BK8 VIP?</h3>
                            <p>
                                There are multiple ways to become a BK8 VIP member:
                                <br /> (1) By depositing the required amount within the stated timeframe
                                <br /> (2) By special invite
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Can BK8 VIP member reserve annual rewards?</h3>
                            <p>
                                All rewards are based on a first come first serve basis and while stock last.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white">How can the deposit amount be calculated?</h3>
                            <p>
                                Deposit and turnover requirements will be based on the accumulated amount
                                from the first day until the last day of the respective month.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white">When can I start enjoying the benefits as a BK8 VIP member?</h3>
                            <p>
                                Members are entitled to enjoy the special promotions and benefits starting
                                from the first day after successfully upgrading to the VIP level.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions Section with Image */}
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row bg-[#162b36] p-6 rounded-md text-gray-300 opacity-90 relative">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-lg font-semibold text-yellow-500 mb-4">Terms & Conditions</h2>
                        <p>
                            BK8 reserves the right to alter, cancel, terminate or suspend the Redemption or any
                            part thereof or any part of the applicable terms and conditions from time to time,
                            with or without any prior notice.
                        </p>
                        <p className="mt-4">
                            Members participate in the VIP program must accept and comply with the above rules
                            and terms as well as all relevant rules and terms of the website implemented by BK8.
                        </p>
                        <p className="text-white mt-6">General BK8 Terms & Conditions apply.</p>
                    </div>
                    <div className="absolute right-[-40px] bottom-[-20px]">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196199/faq-img_meudwy.png"
                            alt="VIP Model"
                            className="w-[180px] lg:w-[250px] h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAndTerms;
