// 'use client'
// import { useState } from "react";
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// const faqs = [
//     {
//         category: "General",
//         questions: [
//             {
//                 question: "Why join BK8.com?",
//                 answer: "BK8 (registered address: 9 Abraham De Veerstraat Willemstad, Curaçao), is one of Asia's leading safe and secured brands. We are licensed and regulated by the Government of Curaçao and operate under the master license of Gaming Services Provider N.V. #365/JAZ, offering distinguished and prominent state-of-the-art Live Dealer Casino, Sports, Slots and many more. Discover real exciting gaming entertainment with attractive promotions, bonuses, highest rebates and loyalty program in BK8."
//             },
//             {
//                 question: "Currencies accepted by BK8",
//                 answer: `Below are the currency options that are accepted by BK8:
//                             Indonesian Rupiah (IDR)*
//                             Malaysian Ringgit (MYR)
//                             Thai Baht (THB)
//                             Vietnamese Dong (VND)*
//                             Cambodia US Dollar (USD)
//                             Philippines Peso (PHP)
//                             International US Dollar (USD)`
//             },
//             {
//                 question: "How to access BK8 mobile version site?",
//                 answer: "Enter https://bk8.co, via any phone browser."
//             }
//         ]
//     },
//     {
//         category: "My Account",
//         questions: [
//             {
//                 question: "How to open an account with BK8.com?",
//                 answer: `We make it hassle-free, fast, and simple to open your account at BK8. On the home page of BK8 website, click on the " Join " button on the top right-hand corner of the page and you will be brought to the registration page.

//                         Please fill in the following information:

//                         Username
//                         - Please name a unique identifier that you will use to login with.

//                         Password
//                         - Password must be between 8 to 20 characters long and consist of at least one uppercase letter (A-Z), lowercase letter (a-z), and number (0-9). Special characters such as !@#$% are allowed. Always remember to keep your password confidential.

//                         Full Name
//                         - Please make sure that you enter a valid full name for payment verification purposes.

//                         Contact Number
//                         - Please provide a valid contact number for better assistance and the security of your account.

//                         Email
//                         - Please enter a valid email for verification purposes.

//                         Currency
//                         - Based on your desired currency that you wish to use for depositing/withdrawal and betting.

//                         Note:
//                         Players must be at least 18 years of age to accept BK8 terms and conditions.`
//             },
//             {
//                 question: "What if I encounter a password error?",
//                 answer: `For situations where there is a password error, kindly check and make sure that your password is entered correctly. Your password must:

//                     Contain 8-20 characters
//                     Include uppercase letter, lowercase letter and numbers
//                     May include special characters
//                     If the issue remains unresolved, please do not hesitate to contact our Customer Service Support representative on Live Chat.`
//             },
//             {
//                 question: "Is my personal information and transaction secure?",
//                 answer: `Our site is developed with your personal privacy and security as our primary concern. BK8 is regulated and will not disclose your personal information which employs the highest standards of data encryption to any third party unless required to do so by applicable laws and regulations or a court order.

//                         BK8.com reserves the right to disclose and transfer your personal data to our respective payment settlement service providers and financial institutions to the extent necessary for completing payments for services provided through our website

//                         For every personal information supplied by users is transmitted via Secure Socket Layer (SSL 128 bit encryption Standard) and stored in secure operating environments that are not accessible by the public. Internal access to all data is limited and strictly monitored.

//                         By agreeing to these terms, you authorize and consent to us to undertake any verification checks from time to time as we may require or may be required by third parties (including but not limited to regulatory bodies) to confirm your personal information and ownership of the transactions/deposits made in your account. You also agree that from time to time, upon our request, you may be required to provide additional information and details regarding any of your personal information that you have previously provided to us, including information related to any deposits and transactions you have made with your account.

//                         In order to protect your money, transactions and personal information, it is your responsibility to ensure that your user login information remains confidential at all times, and you shall be fully responsible for any misuse and/or unauthorized disclosure of your personal information to any third party. Except for the above-mentioned purposes, if you suspect that your personal information has been compromised or accessed by a third party without your knowledge or consent, you must report to us immediately whereupon we may provide you with new account details.

//                         Any transactions made using the correct user login information and personal information will be considered as valid and binding. Only when we receive your report that your user login information or personal information have been compromised and your account has been suspended by us will the transactions be deemed void.`
//             },
//             {
//                 question: "Account Safety",
//                 answer: `You will need to enter accurate information such as "Update Profile", "Banking Details", "Contact number", "Email Address" to get full validation. Please make sure your contact number and email address are correct before verifying it. Note: Please contact our Live Help if you need to change your email and phone number before the verification request is sent.

//                         We may require you to change your user login information from time to time or we may suspend your account if we have reason to believe that there is likely a breach of security or misuse of our website/services. We may, at our sole discretion, change your user login information with prior notice to you.`
//             },
//             {
//                 question: "Gambling With Responsibility",
//                 answer: `Please read this information carefully for your own benefit.

//                         Interpretation and Definitions
//                         Interpretation
//                         The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

//                         Definitions
//                         For the purposes of these Terms and Conditions:

//                         Account means a unique account created for You to access our Service or parts of our Service.

//                         Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Curacao Co.

//                         Service refers to the Website.

//                         Website refers to BK8.com.

//                         You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

//                         Responsible Gambling and Self Exclusion

//                         Responsible Gambling
//                         Gambling means for the majority of our Users, entertainment, fun and excitement. But we also know that for some of our Users gambling has negative side effects. In the medical science is pathologic gambling since many years as serious sickness recognized.
//                         Since our first day we think about this problematic and try out best to help. Under "Responsible Gambling" We understand multiple steps of measures, with which a gambling provider can help to lower the possibility of negative side effects appearing. -In case they already appear we also try to take active steps against them.
//                         The most important instrument against negative side effects from gambling are knowledge and education about the risks of gambling too support our Users self-control in order to make sure they do not suffer from negative side effects.

//                         Information and contact
//                         Our Support will help you via livechat at all time without any additional costs for you:
//                         Live Chat: here
//                         Our Support will of course not give out any information about You without Your consent to anyone else
//                         In addition you also can take a self-test, if You are already gambling addicted at:
//                         https://www.begambleaware.org/gambling-problems/do-i-have-a-gambling-problem/
//                         And you can also find additional information about gambling addictions at:
//                         https://www.begambleaware.org/safer-gambling/

//                         Helpful hints for responsible gambling at BK8.com
//                         We recommend you think about the following hints, before gambling in order to insure gambling stays fun for You and without any negative side effects:
//                         Set yourself a deposit limit
//                         Before you start to gambling think about how much you can afford to gamble with according to Your financial situation. Play with amounts which are for fun and for Your entertainment
//                         Do not try to win back a loss at every cost
//                         Try to not take to huge risks to win back what You lost before at any cost. Play for Entertainment and not to earn money.
//                         Set yourself a time limit
//                         Set yourself a time limit and do not break it. Keep in mind gambling should stay in balance with your other hobbies and not be Your only hobby.
//                         Play smart:
//                         It is smarter to not play, when You are extremely stressed, depressed or under to much pressure. Also do not play when you are under the influence of Medications, Drugs or Alcohol.
//                         Take breaks:
//                         You should take breaks when You notice, that You get tired or can´t concentrate anymore
//                         Only one account:
//                         To make it easier to have an overview how much time and money You spend on gambling it is highly advised to not create more than one Account per Person.
//                         Minor Protection
//                         To use our Service, You have to be 18 years or older. To avoid abuse, keep Your login data save from any minors near You.
//                         Principally we recommend a filter program to avoid minors, especially children, to access any context on the internet, which is not healthy for them.
//                         For parents we can recommend a list of internet filters, to support them, from keeping their children from any context, which was not made for them:
//                         https://famisafe.wondershare.com/internet-filter/best-internet-filters.html

//                         Self-Exclusion:
//                         In case You are diagnosed with a gambling addiction or try to stay away from gambling for a different reason, we want to assist you to stay away from anything, that does nothing good for you. “Self-Exclusion” means, that You exclude yourself, out of Your own choice, from all gambling services. This exclusion cannot be undone for a set amount of time. If you wish to self-exclude yourself from gambling, please message our support and give them a time span between 6 months and 5 years. They also will explain you all future steps and what is needed from you.

//                         Live Chat: here
//                         Please keep in mind that Self Exclusion is permanent for the set time span and will not be undone for your own protection.
//                         During Self Exclusion you are not allowed to create a new Account and every attempt to create a new Account during Self Exclusion is a violation of our Terms of Service and may result in the permanent ban of your original account.`
//             }
//         ]
//     },
//     {
//         category: "Payment",
//         questions: []
//     },
//     {
//         category: "Cryptocurrency",
//         questions: []
//     },
//     {
//         category: "Promotions",
//         questions: []
//     },
//     {
//         category: "Instant Rebate",
//         questions: []
//     },
//     {
//         category: "Fair Play",
//         questions: []
//     },
//     {
//         category: "Product",
//         questions: []
//     },
//     {
//         category: "Technical",
//         questions: []
//     }
//     // Add more categories here
// ];

// const InfoCentre = () => {
//     const [activeCategory, setActiveCategory] = useState("General");
//     const [openQuestion, setOpenQuestion] = useState(null);
//     const [activeTab, setActiveTab] = useState("FAQ");

//     const handleToggleQuestion = (index: any) => {
//         setOpenQuestion(openQuestion === index ? null : index);
//     };

//     return (
//         <div className="p-6 container mx-auto">
//             <div className="border-b pb-2 flex space-x-6 text-gray-600 text-sm">
//                 {['FAQ', 'Rules & Regulations', 'Terms & Conditions', 'Privacy Policy'].map((tab) => (
//                     <span
//                         key={tab}
//                         className={`cursor-pointer ${activeTab === tab ? "font-bold text-black border-b-2 border-orange-500 pb-1" : ""}`}
//                         onClick={() => setActiveTab(tab)}
//                     >
//                         {tab}
//                     </span>
//                 ))}
//             </div>

//             {activeTab === "FAQ" && (
//                 <>
//                     <div className="flex space-x-4 my-4">
//                         {faqs.map((faq) => (
//                             <button
//                                 key={faq.category}
//                                 className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${activeCategory === faq.category
//                                     ? "bg-orange-500 text-white"
//                                     : "bg-gray-200 text-gray-700"
//                                     }`}
//                                 onClick={() => setActiveCategory(faq.category)}
//                             >
//                                 {faq.category}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="bg-white p-4 rounded-lg shadow-lg">
//                         {faqs
//                             .find((faq) => faq.category === activeCategory)
//                             ?.questions.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="border-b last:border-0"
//                                 >
//                                     <button
//                                         className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
//                                         onClick={() => handleToggleQuestion(index)}
//                                     >
//                                         {item.question}
//                                         <span>
//                                             {openQuestion === index ? <FaChevronDown /> : <FaChevronRight />}
//                                         </span>
//                                     </button>
//                                     {openQuestion === index && (
//                                         <div className="px-4 py-3 bg-white text-gray-600">
//                                             <ul className="list-disc list-inside">
//                                                 <li>{item.answer}</li>
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default InfoCentre;


import React from 'react';
import InfoCentre from '@/components/InfoCentre/InfoCentre';

const Page = () => {
    return (
        <InfoCentre />
    )
}

export default Page;