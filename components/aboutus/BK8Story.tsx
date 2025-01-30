import React from "react";

const storyData = [
    {
        year: "2024",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738136324/2024-1_uktfxh.jpg",
        title: "BK8 Announced As Official Sponsor of HSBC BWF World Tour Finals 2024",
        description:
            "BK8 proudly serves as the Official Betting Sponsor for selected HSBC BWF World Tour events in 2024. The tournament has been held annually since 2018, providing a platform for badminton players from around the globe to compete at the highest level. BK8 is excited to support the global badminton community as the BWF embarks on its upcoming World Tour, including the Thailand Open 2024, Hong Kong Open 2024, and the HSBC BWF World Tour Finals in Hangzhou, China.",
    },
    {
        year: "2024",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738136324/2024-2_g3an9q.jpg",
        title: "Aston Villa F.C. as BK8 Official Principal Partner 2023/24",
        description:
            "In 2023, BK8 became the Front-Of-Shirt Partner and Official Principal Partner of Aston Villa F.C. until 2024. The club, founded in the 1870s, has a rich history of success, including multiple league and cup titles. BK8 looks forward to working with Aston Villa on charity events to positively impact the community.",
    },
    {
        year: "2023",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738136324/2023-1_lhvnua.jpg",
        title: "Crystal Palace F.C. as BK8 Official Asia Betting Partner",
        description:
            "Crystal Palace F.C. announced BK8 as their official Asian Betting Partner for the 2022/2023 season. The partnership includes LED advertising during home matches and player activation videos in Asia. BK8 also supports local youth employment programs in sports.",
    },
    {
        year: "2022",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738136324/2022-1_pbh9zd.jpg",
        title: "Crystal Palace F.C. as BK8 Official Asia Betting Partner",
        description:
            "Crystal Palace F.C. has announced BK8 as their official Asian Betting Partner for the 2022/2023 season. The partnership with the South London-based football club allows BK8 to feature LED advertising during home matches and showcase player activation videos in Asia. As part of this collaboration, BK8 supports local youths from under-represented backgrounds in securing jobs in the club and in the broader sports industry.",
    }
];

const BK8Story: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold text-gray-900">BK8 Story</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-2">
                    Explore BK8's journey and partnerships throughout the years.
                </p>
            </div>

            {/* Timeline Section */}
            <div className="relative border-l-4 border-orange-500 pl-12">
                {storyData.map((item, index) => (
                    <div key={index} className="relative mb-16 group">
                        {/* Year Marker */}
                        <div className="absolute -left-20 flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold shadow-lg transition-all duration-300 transform group-hover:scale-110">
                            {item.year}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                            {/* Image Section */}
                            <div className="relative group lg:col-span-1">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full md:w-full lg:w-2/3 mx-auto rounded-xl shadow-md object-cover transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl"
                                />
                            </div>

                            {/* Description Section */}
                            <div className="bg-white py-6 px-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-100 lg:col-span-2 max-w-5xl">
                                <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-700 text-lg mt-6 leading-relaxed">{item.description}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-16">
                <button className="bg-gray-200 text-black text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    View More
                </button>
            </div>
        </div>
    );
};

export default BK8Story;
