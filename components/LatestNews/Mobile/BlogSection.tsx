'use client';

import React from 'react';

const BlogSection: React.FC = () => {
    const blogPosts = [
        {
            title: 'Top 6 Most Popular Slot Games in 2025 and Why Players Love Them',
            excerpt:
                'Slot games have been a timeless favorite for players of all kinds, evolving from simple machines to...',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260332/blog-20241218152056012_axoium.jpg',
            date: '09/01/2025',
        },
        {
            title: 'Why Is It Safe To Deposit With Cryptocurrency And How To Do It?',
            excerpt:
                'Cryptocurrency is quickly becoming one of the fastest and safest ways for players to transfer money online. Th...',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260332/blog-20241218150248333_z1jsgh.jpg',
            date: '26/12/2024',
        },
        {
            title: 'Top 5 Most Bet On Sporting Events in 2025',
            excerpt:
                'As 2025 begins, millions of sports enthusiasts are buzzing with excitement, eagerly looking forward ...',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260333/blog-20241218154220841_hc5rsb.jpg',
            date: '31/12/2024',
        },
        {
            title: 'Top 5 Most Popular Live Casino Games You Should Try On BK8',
            excerpt:
                'Live casino games are all the rage in online casinos nowadays, and people are making good money from them...',
            image: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260333/blog-20250114083809401_kejtdp.jpg',
            date: '05/01/2025',
        },
    ];

    return (
        <section className="bg-white px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">BK8 Blog</h2>
                <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                    See all
                </a>
            </div>
            <div className="space-y-6">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
                    >
                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="ml-4 flex-1">
                            <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center mt-3">
                                <a href="#" className="text-blue-500 text-sm font-medium mr-4 hover:underline">
                                    Read More
                                </a>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
