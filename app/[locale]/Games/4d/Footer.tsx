const Footer = () => {
    return (
        <footer className="mt-6">
            <div className="max-w-[1400px] mx-auto px-6 text-gray-600 text-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Disclaimer :</h4>
                <p>
                    The content shown on this page is provided by the respective 4D providers and is for general information purposes only.
                    While information is presented in good faith, we make no guarantee or representation as to the accuracy, validity,
                    timeliness and/or completeness of any gaming results published on this page. The site may include links to third-party
                    websites, advertisers, services or content that are not owned or controlled by BK8. By accessing and using our site, the
                    user hereby acknowledges and agrees that he/she has read and understood the foregoing assumption of risk. In no event
                    shall we bear any liability for any loss or damage resulting from the use of the site or reliance on its information.
                    We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or
                    services. We are not responsible for monitoring transactions between users and third-party providers. All trademarks
                    and product names are properties of their respective holders. This site is not affiliated with any of the organizations
                    linked or described.
                </p>



                <div className="w-full mt-12">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736921418/app-download_mezkyi.jpg"
                        alt="App Download"
                        className="w-full object-cover rounded-lg"
                    />
                </div>

                {/* Bonus Section */}
                <div className="bg-gray-100 py-6 mt-6 flex flex-wrap justify-between items-center px-6 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:flex-nowrap">
                    {/* Bonus Details */}
                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 items-center justify-center space-y-4 sm:space-y-0 w-full sm:w-auto">
                        {/* Welcome Bonus */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">150%</h2>
                            <p className="text-orange-500 text-lg">Welcome Bonus</p>
                        </div>

                        {/* Weekly Rescue Bonus */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">MYR 6,888</h2>
                            <p className="text-orange-500 text-lg">Weekly Rescue Bonus</p>
                        </div>

                        {/* Crypto Casino */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">#1 Crypto Casino</h2>
                            <p className="text-orange-500 text-lg">Fully Licensed In Asia</p>
                        </div>
                    </div>

                    {/* Join Now Button */}
                    <div className="w-full sm:w-auto flex justify-center">
                        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-orange-600 transition duration-300">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
