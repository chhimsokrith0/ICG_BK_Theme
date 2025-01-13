const Header = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/slots-bn-MYR_ok8ybq.jpg"
                alt="Sportsbook Banner"
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Slots
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    Spin Your Way to Jackpot!
                </h1>
                <p className="text-md md:text-lg mt-2 drop-shadow-md">
                    Discover the Best RTP Games and Enjoy Amazing Rewards!
                </p>
            </div>
        </div>
    );
};

export default Header;
