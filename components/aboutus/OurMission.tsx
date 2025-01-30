import React from "react";
import { FaCog, FaChartLine, FaLightbulb, FaFileAlt, FaAward, FaMobileAlt } from "react-icons/fa";

const OurMission: React.FC = () => {
    return (
        <div className=" px-6 py-12 text-center">
            {/* Title Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Are BK8</h2>
            <p className="text-gray-700 text-lg  mx-auto">
                We aim to be the largest one-stop hub for all online gaming enthusiasts in Asia.
                Providing access to a wide range of games in sports, casino, slots and many more.
            </p>

            {/* Description Section */}
            <div className="mt-6 text-gray-600 text-sm leading-relaxed  mx-auto space-y-4">
                <p>Based in Malta, our team of professionals all around the globe strives to build a fully integrated gaming website using cutting-edge technology.</p>
                <p>Our goal is to provide a platform with the most comprehensive gambling selection in hopes of giving members a stress-free environment while they seek to be entertained.</p>
                <p>In order to do so, we have eliminated the complexity of traditional casino and replaced it with a more straightforward and streamlined process, allowing members quicker access to their desired games without the hassle of complicated transaction procedures.</p>
                <p>At BK8, our diverse group of experts work tirelessly to create an innovative website that is both accessible and lifelike. Through ongoing and extensive research, we expand our knowledge about the industry and learn more about what our customers want, allowing us to improve our services.</p>
                <p>BK8 team members are equipped with the latest information needed to innovate and bring an online casino to life – giving members an experience so real, it is almost as though you're in an actual casino. Try it out by joining our real-time, real-life dealers in our Live Casino.</p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-gray-700">
                {[
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131392/singleAPI_meoif6.svg", text: "Slots, Live Casino, Sportsbook & More via One Single API" },
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131402/clientHub_gjmka8.svg", text: "In-game Promotional Tool & Client Hub" },
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131414/Innovative_egptov.svg", text: "Innovative products designed to entertain" },
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131436/Certified_kxbdxl.svg", text: "Certified and licensed in over 20 jurisdictions" },
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131513/MultiAward_zpyt0h.svg", text: "Multi Award Winning Content" },
                    { imgSrc: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738131481/31languages_xrhfvq.svg", text: "Mobile, desktop, 31 languages, and all currencies" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 rounded-lg transition transform duration-300"
                    >
                        <img src={item.imgSrc} alt={item.text} className="w-24 h-24 mb-4" />
                        <p className="font-semibold text-center">{item.text}</p>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default OurMission;
