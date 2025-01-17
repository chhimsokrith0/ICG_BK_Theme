import React from "react";

const Header: React.FC = () => {
    return (
        <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
                    alt="BK8 Logo"
                    className="h-12"
                />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Username</h2>
            <p className="text-gray-500">
                Enter your registered email address or contact number to receive instructions on how to reset your password.
            </p>
        </div>
    );
};

export default Header;
