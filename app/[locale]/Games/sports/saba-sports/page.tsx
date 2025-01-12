import { useTranslations } from "next-intl";
const SabaSports = () => {
    const t = useTranslations("Games.saba-sports");
    return (
        <div className="text-center py-16 px-6  max-w-[1400px] mx-auto">
            {/* Header Section */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("header.title")}</h1>
            <p className="text-gray-700 text-lg mb-4">
                {t("header.subtitle")}
            </p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                {t("header.description")}
            </p>

            <div className="mt-8">
                <button className="bg-orange-500 text-white font-semibold text-lg py-3 px-10 rounded-full hover:bg-orange-600 transition duration-300">
                    {t("button.text")}
                </button>
            </div>

            {/* Grid Layout */}
            <div className=" min-h-screen py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Account Section */}
                    <div className="bg-white py-6 px-8 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736662570/sabasport_gdr39m.png"
                                alt="Saba Sports"
                                className="mr-4"
                            />
                        </div>
                        <div className="mb-6">
                            <div className="text-left">
                                <label className="block text-gray-700 font-medium mb-2">
                                    {t("accountSection.username.label")}
                                </label>
                                <div className="flex items-center bg-gray-100 border rounded-lg px-4 py-3">
                                    <input
                                        type="text"
                                        value="-"
                                        readOnly
                                        className="flex-grow bg-transparent text-gray-600 outline-none"
                                    />
                                    <button className="text-blue-500 hover:text-blue-700 ml-2">
                                        <i className="fas fa-copy"></i> {t("accountSection.copy")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-left">
                                <label className="block text-gray-700 font-medium mb-2">
                                    {t("accountSection.password.label")}
                                </label>
                                <div className="flex items-center bg-gray-100 border rounded-lg px-4 py-3">
                                    <input
                                        type="text"
                                        value="-"
                                        readOnly
                                        className="flex-grow bg-transparent text-gray-600 outline-none"
                                    />
                                    <button className="text-blue-500 hover:text-blue-700 ml-2">
                                        <i className="fas fa-copy"></i> {t("accountSection.copy")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-gray-600 text-sm">
                            {t("accountSection.downloadText")}
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736662570/ios-icon_v5rqiv.svg"
                                    alt="iOS"
                                    className="w-6 h-6"
                                />
                                <span>iOS 64bit</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736662570/android-icon_odjmot.svg"
                                    alt="Android"
                                    className="w-6 h-6"
                                />
                                <span>Android</span>
                            </button>
                        </div>
                    </div>

                    {/* Promotional Section */}
                    <div className="bg-white py-6 px-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {t("promotionSection.title")}
                        </h2>
                        <p className="text-gray-700 mb-4">
                            {t("promotionSection.description")}
                        </p>
                        <p className="text-gray-600 text-sm mb-6">
                            {t("promotionSection.info")}
                        </p>
                        <div className="text-left text-sm text-gray-600">
                            <h3 className="font-bold mb-2">{t("promotionSection.termsAndConditions.title")}</h3>
                            <ol className="list-decimal pl-4 space-y-2">
                                <li>{t("promotionSection.termsAndConditions.items.0")}</li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.1")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.2")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.3")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.4")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.5")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.6")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.7")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.8")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.9")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.10")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.11")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.12")}
                                </li>
                                <li>
                                    {t("promotionSection.termsAndConditions.items.13")}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736662687/IBC_amzgkv.jpg" className="mx-auto w-full h-full" alt="" />
        </div>
    );
};

export default SabaSports;
