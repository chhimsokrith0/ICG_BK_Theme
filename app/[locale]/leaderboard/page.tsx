const Page = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="relative">
                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737435208/leaderboard-main-banner-myr_pgbaqj.jpg"
                    alt="Fishing Banner"
                    className="w-full h-auto"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center px-4 text-white md:left-20 md:flex">
                    <h1 className="hidden md:block text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Leaderboard
                    </h1>
                    <p className="hidden md:block text-lg md:text-3xl drop-shadow-lg">
                        Play and ascend <br /> the leaderboard to win amazing <br /> prizes!
                    </p>
                </div>
            </div>


            <div className="container mx-auto mt-10 px-4 md:px-6">
                {/* Tabs Section */}
                <div className="flex flex-wrap justify-center md:justify-start mt-10 gap-4 text-lg">
                    <button className="px-4 py-2 font-medium text-white bg-orange-500 rounded-md shadow-md hover:bg-orange-600">
                        About
                    </button>
                    <button className="px-4 py-2 font-medium text-gray-700 rounded-md hover:text-orange-500">
                        My Rank
                    </button>
                    <button className="px-4 py-2 font-medium text-gray-700 rounded-md hover:text-orange-500">
                        Prizes
                    </button>
                </div>

                {/* Description Section */}
                <div className="text-center mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold">BK8 Exclusive Leaderboard</h2>
                    <p className="text-gray-700 mt-4 leading-relaxed max-w-2xl mx-auto">
                        Show them how good you are! The top 10 players with the highest turnover will be rewarded with generous prizes according to their membership tier every month.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737435478/realtime-leaderboard-icon_v7itjj.png"
                            alt="Trophies"
                            className="w-40 h-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Real-time Rankings</h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            BK8's live leaderboard allows players to get real-time updates on their rankings and see where they stand among others.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737435478/lucrative-prizes-icon_smrn6g.png"
                            alt="Car"
                            className="w-40 h-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Lucrative Prizes</h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            The higher you step up the leaderboard ladder, the more luxury gifts and prizes you can get your hands on!
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737435476/fair-play-challenges_tnoowx.png"
                            alt="Fair Play"
                            className="w-40 h-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Fair Play Challenges</h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            Pit yourself against others of the same membership tier and secure a top spot on the leaderboard every month!
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737435478/great-selection-of-game-categories-icon_oht77o.png"
                            alt="Games"
                            className="w-40 h-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Wide Game Selection</h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            Players can compete with each other across a broad range of game categories including Sports, Live Casinos, Slots, Fishing, and Lottery.
                        </p>
                    </div>
                </div>
            </div>




            <section className="py-6">
                <div className="container mx-auto px-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">My Rank</h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
                        {/* Active Button */}
                        <button className="px-6 py-2 bg-white text-orange-500 border border-orange-500 rounded-full font-semibold shadow hover:bg-orange-100 transition-all duration-300">
                            Sports
                        </button>

                        {/* Inactive Buttons */}
                        <button className="px-6 py-2 bg-white text-gray-400 border border-gray-200 rounded-full font-medium shadow hover:bg-gray-200 transition-all duration-300">
                            Casino
                        </button>
                        <button className="px-6 py-2 bg-white text-gray-400 border border-gray-200 rounded-full font-medium shadow hover:bg-gray-200 transition-all duration-300">
                            Slots
                        </button>
                        <button className="px-6 py-2 bg-white text-gray-400 border border-gray-200 rounded-full font-medium shadow hover:bg-gray-200 transition-all duration-300">
                            Others
                        </button>
                    </div>
                </div>
            </section>




            <section className="py-6">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                        {/* Active Button */}
                        <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195401/silver_ws9l97.png"
                                alt="Normal"
                                className="w-6 h-6"
                            />
                            <span>Normal</span>
                        </button>

                        {/* Inactive Buttons */}
                        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195400/platinum_qqtwun.png"
                                alt="Bronze"
                                className="w-6 h-6"
                            />
                            <span>Bronze</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/gold_kbq9xm.png"
                                alt="Silver"
                                className="w-6 h-6"
                            />
                            <span>Silver</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/diamond_xrygod.png"
                                alt="Gold"
                                className="w-6 h-6"
                            />
                            <span>Gold</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/bronze_x0vh3t.png"
                                alt="Platinum"
                                className="w-6 h-6"
                            />
                            <span>Platinum</span>
                        </button>

                        <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-500 font-medium rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/diamond_xrygod.png"
                                alt="Diamond"
                                className="w-6 h-6"
                            />
                            <span>Diamond</span>
                        </button>
                    </div>
                </div>
            </section>





            <section className="py-6">
                <div className="container mx-auto px-6">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <table className="table-auto w-full text-left">
                            {/* Table Header */}
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-sm font-bold text-gray-600">Ranking</th>
                                    <th className="px-6 py-3 text-sm font-bold text-gray-600">Username</th>
                                    <th className="px-6 py-3 text-sm font-bold text-gray-600">Turnover</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {/* Top 3 Rows */}
                                {[
                                    { rank: 1, username: "j*a*6", turnover: "7,113,076.00", bg: "bg-blue-900", badge: "bg-orange-500" },
                                    { rank: 2, username: "c*o*k*6", turnover: "6,948,948.00", bg: "bg-blue-800", badge: "bg-orange-400" },
                                    { rank: 3, username: "z*t*a*7", turnover: "5,539,535.00", bg: "bg-blue-600", badge: "bg-yellow-400" },
                                ].map(({ rank, username, turnover, bg, badge }) => (
                                    <tr key={rank} className={`${bg} text-white`}>
                                        <td className="px-6 py-4 flex items-center space-x-2">
                                            <span
                                                className={`w-8 h-8 flex items-center justify-center font-bold text-white rounded-full ${badge}`}
                                            >
                                                {rank}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold">{username}</td>
                                        <td className="px-6 py-4 font-bold">{turnover}</td>
                                    </tr>
                                ))}

                                {/* Remaining Rows */}
                                {[
                                    { rank: 4, username: "m*s*a*1", turnover: "5,030,314.00" },
                                    { rank: 5, username: "k*n*i*2", turnover: "4,351,282.00" },
                                    { rank: 6, username: "f*n*m*v*1", turnover: "4,269,347.00" },
                                    { rank: 7, username: "a*t*t*w", turnover: "3,692,488.00" },
                                    { rank: 8, username: "k*p*k*p*1", turnover: "3,482,502.00" },
                                    { rank: 9, username: "k*k*2*9", turnover: "2,794,045.00" },
                                    { rank: 10, username: "z*m*a*9", turnover: "2,475,011.00" },
                                ].map(({ rank, username, turnover }) => (
                                    <tr key={rank} className="bg-gray-50">
                                        <td className="px-6 py-4">{rank}</td>
                                        <td className="px-6 py-4">{username}</td>
                                        <td className="px-6 py-4">{turnover}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>





            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms and Conditions</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        By participating in this Leaderboard Campaign (hereinafter referred to as "the Campaign"), Eligible Participants hereby agree to be bound by the terms and conditions ("Terms and Conditions") of the Campaign and the decisions made by BK8.
                    </p>

                    {/* Duration and Eligibility */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Duration and Eligibility</h3>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                        <li>
                            The Campaign starts on <strong>1 January 2025</strong> and ends on <strong>31 December 2025</strong> ("Campaign Period").
                        </li>
                        <li>
                            The Campaign is open to all BK8 players except BK8’s employees, partners, representatives, and/or affiliates/agents (including without limitation, any third-party service providers engaged by BK8 for purposes of the Campaign) ("Eligible Participants").
                        </li>
                        <li>
                            To be eligible for the Campaign, Eligible Participants must:
                            <ol className="list-lower-alpha pl-6 space-y-1">
                                <li>Verify their identity in their BK8 account by providing a phone number and email.</li>
                                <li>Complete one withdrawal before claiming the prize.</li>
                                <li>
                                    Have at least an MYR 1,000 valid bet within the calendar month.{" "}
                                    <a href="#" className="text-blue-500 underline">Read more</a>
                                </li>
                            </ol>
                        </li>
                    </ol>

                    {/* Prizes */}
                    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Prizes</h3>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                        <li>There shall be 240 winners per month throughout the Campaign.</li>
                        <li>
                            Prizes are exchangeable for cash at only <strong>90%</strong> of the total prize value, and the exchanged amount will be included in the member’s win/loss calculation.
                        </li>
                        <li>
                            BK8 reserves the absolute right to substitute the prize with any other item(s) of similar value at its discretion by giving a twenty-one (21) days prior notice to the winners through any method of communication that BK8 shall at its absolute discretion decide.{" "}
                            <a href="#" className="text-blue-500 underline">Read more</a>
                        </li>
                    </ol>

                    {/* General Terms & Conditions */}
                    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">General Terms & Conditions</h3>
                    <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                        <li>
                            BK8 shall not be responsible or held liable in any manner whatsoever and shall be absolved from all forms of liability in respect of technical failures of any kind whatsoever, intervention, interruptions, and/or electronic or human error in the administration and/or processing of the transaction performed via the BK8 website and/or the determination of the participants’ eligibility for the prize.
                        </li>
                        <li>
                            The selection of winners will be made by the BK8 system calculation. All matters relating to the Campaign, including the determination of winners, are final, binding, and conclusive. No correspondence, protests, or appeals will be entertained.
                        </li>
                        <li>
                            BK8 reserves the right upon giving reasonable notice to alter, shorten, cancel, suspend, or terminate the Campaign or any part thereof within twenty-one (21) days via BK8 inbox message and/or through any other channels of communication in the absolute discretion of BK8.{" "}
                            <a href="#" className="text-blue-500 underline">Read more</a>
                        </li>
                    </ol>
                </div>
            </section>


        </div>
    );
};

export default Page;
