const Header = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1738128339/top-banner_i0b5ty.jpg"
                alt="Fishing Banner"
                className="w-full  object-cover"
            />
            
            {/* Text Overlay - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                {/* Logo */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1738128505/bk8-logo_dinvrw.svg"
                    alt="BK8 Logo"
                    className="h-[100px] md:h-[120px] mb-4"
                />
                
                {/* Main Heading */}
                <p className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                    Biggest And Most Trusted
                </p>
            </div>
        </div>
    );
};

export default Header;
