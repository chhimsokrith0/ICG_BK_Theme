const Header = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850073/fishing-bn_esugrf.jpg"
                alt="Fishing Banner"
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Fishing
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    The most unique fishing experience
                </h1>
                <p className="text-md md:text-lg mt-2 drop-shadow-md">
                    Sign up today for never ending rewards.
                </p>
            </div>
        </div>
    );
};

export default Header;
