import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-start text-white p-8 lg:p-12 relative">
            {/* Left Section - Text */}
            <div className="flex-1 z-10">
                <h1 className="text-2xl lg:text-4xl font-bold mb-4 border-b-2 border-gray-400 pb-2">
                    Terms & Conditions
                </h1>

                <h2 className="text-xl font-semibold mb-4">
                    Event: Lucky Wheel Spin
                </h2>

                <h3 className="text-lg font-bold mb-2">How To Claim:</h3>
                <ol className="list-decimal list-inside mb-6 space-y-2 text-sm lg:text-base">
                    <li>This promotion is available for USD members.</li>
                    <li>
                        Prizes won in the Lucky Wheel Spin will be issued
                        directly into members' main wallet and are required to
                        complete one (1) turnover before withdrawal.
                    </li>
                    <li>
                        Members are required to verify their identity with their
                        phone number or email and a screenshot of the pop-up
                        message for the Special Prize to Customer Service to
                        claim the special prize.
                    </li>
                </ol>

                <h3 className="text-lg font-bold mb-2">Terms & Conditions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm lg:text-base">
                    <li>
                        All members are entitled to one (1) free spin daily, the
                        free spin will not accumulate and will expire/ be
                        forfeited the next day.
                    </li>
                    <li>
                        There will only be 6 prizes per month throughout the
                        Campaign.
                    </li>
                    <li>
                        100 points will be automatically converted to one (1)
                        additional spin. The total points displayed on the daily
                        mission page will only be deducted after members use up
                        their daily login spins.
                    </li>
                    <li>
                        There will be no expiration nor max cap for the activity
                        points earned.
                    </li>
                    <li>
                        Physical prizes, if applicable, are expected to be
                        received by winners via delivery between seven (7) to
                        fourteen (14) working days.
                    </li>
                    <li>
                        Prizes are subject to availability and photos are for
                        illustration purposes only.
                    </li>
                    <li>
                        Members who have not made a deposit or have a history
                        risk record will be ineligible to participate in this
                        promotion.
                    </li>
                    <li>
                        BK8 reserves the absolute right to substitute the prize
                        with any other item(s) of similar value at its
                        discretion by giving a twenty-one (21) days prior
                        notice to the winners through any method of
                        communication that BK8 shall at its absolute discretion
                        decide.
                    </li>
                    <li>
                        Participating members must accept and comply with all
                        the terms mentioned above as well as all relevant and
                        rules and regulations stated on the BK8 website.
                    </li>
                    <li>
                        BK8 may at its discretion disqualify/reject any Eligible
                        Participant who does not comply with the Terms and
                        Conditions stated herein and/or is found or suspected
                        of tampering with the Campaign and/or its process or
                        the operation of the Campaign. Tampering shall include
                        fraudulent activities involving any act of deceit
                        and/or deception and/or cheating with regards to the
                        Campaign and/or the eligible channel.
                    </li>
                    <li>General BK8 Terms & Conditions apply.</li>
                </ol>
            </div>

            {/* Right Section - Image */}
            <div className="relative flex-1 flex justify-center items-center">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737976552/tnc-bg_kgscbw.png"
                    alt="Lucky Wheel Character"
                    className="w-full h-auto max-w-[500px] lg:max-w-none lg:h-[600px] object-contain"
                />
            </div>
        </div>
    );
};

export default TermsAndConditions;
