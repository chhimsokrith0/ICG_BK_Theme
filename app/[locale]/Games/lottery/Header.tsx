const Header = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737088068/lottery-bn_MY_hafegz.jpg"
                alt="Fishing Banner"
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Lottery
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                    Low bet high winning <br /> New released "KENO" <br /> from BK8
                </h1>
                <p className="text-md md:text-lg mt-2 drop-shadow-md">
                    easy game that played every 30 seconds
                </p>
            </div>
        </div>
    );
};

export default Header;
