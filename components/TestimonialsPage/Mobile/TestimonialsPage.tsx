'use client';

import React from 'react';

const TestimonialsPage: React.FC = () => {
    const testimonials = [
        {
            title: 'Super fast withdrawals',
            content:
                "BK8's withdrawal is super fast. I was able to withdraw my winnings within 15 minutes. Thanks to the winnings from BK8, I managed to settle my outstanding housing loan.",
            rating: 5,
        },
        {
            title: 'Highest payout you can ever get!',
            content:
                "The best platform I've experienced! BK8 has the highest payout rate and the most rewarding promotions.",
            rating: 5,
        },
        {
            title: 'The Crypto Casino of my choice',
            content:
                'My experience of depositing and withdrawing cryptocurrency with BK8 has been very smooth. Other platforms have no such option for cryptocurrency.',
            rating: 5,
        },
    ];

    return (
        <section className="bg-white px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Testimonials</h2>
                <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                    See all
                </a>
            </div>
            <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
                    >
                        <div className="flex items-center mb-2">
                            {[...Array(testimonial.rating)].map((_, starIndex) => (
                                <svg
                                    key={starIndex}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-yellow-400"
                                >
                                    <path d="M12 .587l3.668 7.431L23 9.168l-5.5 5.354L18.835 23 12 19.799 5.165 23l1.335-8.478L1 9.168l7.332-1.15L12 .587z" />
                                </svg>
                            ))}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{testimonial.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{testimonial.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsPage;
