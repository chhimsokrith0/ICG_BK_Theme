export default function page() {
    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6 max-w-[1400px] mx-auto">
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-4">IM Esports</h1>
                <p className="text-xl text-gray-300 mb-4">
                    Satisfy player demands with unmatched services
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    IM eSports is a betting platform built for the players, founded and developed by a team of professional eSports players. Deviating away from the standard sportsbook model, IM eSports is designed for both players and fans of the various eSports. The stunning visual interface is both simple, yet efficient. Gamers and eSports fans alike will feel right at home with this product, and placing a wager will feel like second nature.
                </p>
                <div className="mt-8">
                    <button className="bg-orange-500 text-white font-semibold text-xl py-3 px-12 rounded-full hover:bg-orange-600 transition duration-300">
                        Play Now
                    </button>
                </div>
            </div>
            <div className="relative bg-[#1A1B41] max-w-[1400px] mx-auto">
                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663336/esport-benefits-bg_b7f4yy.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />

                {/* Features Grid */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="relative max-w-[600px] mx-auto"> {/* Reduced max-width */}
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736668959/esport-benefits_en_bdibu0.png"
                            className="w-full h-auto mx-auto"
                            alt="Features Grid"
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}