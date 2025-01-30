import React from "react";

const SelfAssessmentQuiz = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-center p-6">
            {/* Text Content */}
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Self-assessment Quiz
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    As an effort to instill responsible gaming habits in all members, BK8 has 
                    constructed a self-assessment quiz to help members get a better understanding 
                    of their gaming habits.
                </p>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-end">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1738148385/quiz_oo4626.png"
                    alt="Quiz"
                    className="w-full  rounded-md object-contain"
                />
            </div>
        </div>
    );
};

export default SelfAssessmentQuiz;
