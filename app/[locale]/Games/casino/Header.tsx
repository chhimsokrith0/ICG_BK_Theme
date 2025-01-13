const Header = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736743401/casino-bn_wazfe8.jpg"
                alt="Casino Banner"
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Live Casino
                </h1>
                <h2 className="text-lg md:text-2xl mt-4 drop-shadow-md">
                    Play games hosted by our live dealers
                </h2 >
                <p className="text-md md:text-lg mt-2 drop-shadow-md">
                    Sign up today for never ending rewards.
                </p>
            </div>
        </div>
    );
};

export default Header;
