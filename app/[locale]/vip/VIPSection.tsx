const VIPSection = () => {
    return (
        <div className="bg-[#0b2134] p-10">
            <section
                className="relative bg-cover bg-center max-w-[1400px] rounded-3xl mx-auto bg-no-repeat py-16 px-8 lg:px-24 flex flex-col lg:flex-row items-center shadow-2xl"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737193449/about-background_wl7rdv.jpg')`,
                    height: "650px",
                }}
            >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none rounded-3xl"></div> */}

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
                    {/* Left Side: Text Content */}
                    <div className="text-white lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-semibold text-yellow-400 tracking-wide">
                            Be a BK8 VIP
                        </h2>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                            Experience Exclusivity Like None Other — Special Promotions, Gifts, and Rebates.
                            <span className="text-yellow-400"> More than you expect!</span>
                        </h3>
                        <p className="text-gray-300 leading-8 text-lg">
                            As Cambodia’s most innovative and all-inclusive online gaming website, BK8 never stops trying to give members the best. From game options to service standards, BK8 provides the latest and the finest.
                        </p>
                        <p className="text-gray-300 leading-8 text-lg">
                            To take it up a notch, BK8 is introducing an exclusive VIP program designed to give loyal members more reasons to continue trusting us as their entertainment provider. The five tiers that form the backbone of BK8 VIP Program are Bronze, Silver, Gold, Platinum & Diamond.
                        </p>
                        <p className="text-gray-300 leading-8 text-lg">
                            The purpose of having a tier-based program is to give members the incentives needed to upgrade progressively. Although we encourage members to achieve VIP tier requirements and keep moving up, our focus is always on members’ satisfaction, especially VIP members.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VIPSection;
