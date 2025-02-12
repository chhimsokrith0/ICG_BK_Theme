import React from "react";
import { useTranslations } from "next-intl";


const Footer = ({ locale }: { locale: string }) => {

    const t = useTranslations("footer");


    const gameCategories = t.raw('gameCategories');
    const infoLinks = t.raw('infoLinks');


    return (
        <footer className="text-gray-700 py-8">
            <div className="container mx-auto px-4">
                <div className="border-t border-gray-300 my-4"></div>

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4"> {t('aboutBK8')} </h4>
                        <p className="text-sm">
                            {t('aboutBK8Description')}
                        </p>
                        <div className="mt-4">
                            <h5 className="font-semibold text-sm flex items-center">
                                {t('gamingLicense')}
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514757/tick_w84he0.svg"
                                    className="w-[18px] h-[16px] ml-2"
                                    alt="Verified Tick"
                                />
                            </h5>
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514730/gcb_jk004w.svg"
                                alt="Gaming License GCB"
                                className="mt-2 w-[79px] h-[45px]"
                            />
                        </div>

                    </div>

                    {/* Games Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t('games')}</h4>
                        <ul className="space-y-2 text-sm text-black text-block">
                            {gameCategories.map((category: { name: string, link: string }, index: number) => (
                                <li key={index}>
                                    <a href={category.link} className="text-black text-block hover:text-gray-900">
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info Section */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t('info')}</h4>
                        <ul className="space-y-2 text-sm text-black text-block">
                            {infoLinks.map((link: any, index: number) => (
                                <li key={index}>
                                    {typeof link === 'object' ? (
                                        <a href={link.link} className="text-black text-block hover:text-gray-900">
                                            {link.name}
                                        </a>
                                    ) : (
                                        link
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t('certifications')}</h4>
                        <div className="flex flex-wrap gap-4">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514717/bmm_h7syzs.svg"
                                alt="BMM Certification"
                                className="w-[50px] h-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514743/itech_hoynpe.svg"
                                alt="iTech Labs"
                                className="w-[50px] h-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514750/reco_cert_rvmjbx.svg"
                                alt="GoDaddy Verified"
                                className="w-[50px] h-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514760/tt_pmkhkg.svg"
                                alt="ThreatMetrix Certification"
                                className="w-[50px] h-auto"
                            />
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514733/godaddy_adm04o.svg"
                                alt="ThreatMetrix Certification"
                                className="w-[50px] h-auto"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 mt-8 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Payment Methods */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{t('paymentMethods')}</h4>
                            <div className="flex gap-4">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514714/Bitcoin_n1vttu.svg"
                                    alt="Bitcoin"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514767/USDT_xyvtxi.svg"
                                    alt="Tether"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514720/Ethereum_o8szuv.svg"
                                    alt="Ethereum"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514770/wingmoney_cmwfqm.svg"
                                    alt="Wing"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514680/aba_e0vht3.png"
                                    alt="ABA Bank"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514708/acleda_bwrvj3.svg"
                                    alt="Special Payment"
                                    className="w-[30px] h-[30px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514747/maybank_xijrl3.svg"
                                    alt="Special Payment"
                                    className="w-[30px] h-[30px]"
                                />
                            </div>
                        </div>


                        {/* Follow Us */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{t('followUs')}</h4>
                            <div className="flex space-x-4">
                                {/* Replace with appropriate icons */}
                                <i className="fab fa-youtube text-gray-500 hover:text-gray-800 text-xl"></i>
                                <i className="fab fa-instagram text-gray-500 hover:text-gray-800 text-xl"></i>
                                <i className="fab fa-twitter text-gray-500 hover:text-gray-800 text-xl"></i>
                                <i className="fab fa-facebook text-gray-500 hover:text-gray-800 text-xl"></i>
                            </div>
                        </div>

                        {/* Security */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{t('security')}</h4>
                            <div className="flex flex-col gap-2">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514740/iovation_g8mz8s.svg" // Replace with Iovation logo URL
                                    alt="Iovation"
                                    className="w-[120px] h-[40px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514753/threatmetrix_a6qani.svg" // Replace with ThreatMetrix logo URL
                                    alt="ThreatMetrix"
                                    className="w-[120px] h-[40px]"
                                />
                            </div>
                        </div>


                        {/* Responsible Gaming */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">{t('responsibleGaming')}</h4>
                            <div className="flex gap-4">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514678/18_g13jas.svg" // Replace with 18+ logo URL
                                    alt="18+"
                                    className="w-[40px] h-[40px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514727/gamcare_lcmf0n.svg" // Replace with GamCare logo URL
                                    alt="GamCare"
                                    className="w-[100px] h-[40px]"
                                />
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736514711/begambleaware_b4e2ki.svg" // Replace with BeGambleAware logo URL
                                    alt="Be Gamble Aware"
                                    className="w-[120px] h-[40px]"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-sm mt-8">
                        {t('footerNote')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
