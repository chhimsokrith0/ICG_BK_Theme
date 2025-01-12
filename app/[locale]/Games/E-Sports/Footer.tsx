const Footer = () => {
    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Esports Games
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    Popular & Massive Multiplayer
                </p>
            </div>

            {/* Game Logos */}
            <div className="flex flex-wrap justify-center mb-10">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736668283/esport-game-logo_db7rd1.png"
                    alt="Game Logos"
                    className="mx-auto max-w-[80%] h-auto"
                />
            </div>

            {/* Background and Bottom Image */}
            <div className="relative">
                {/* Bottom Character and Effects */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736668283/esport-btm-bg_eq6ecu.png"
                    alt="Bottom Characters and Effects"
                    className="mx-auto w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Footer;
