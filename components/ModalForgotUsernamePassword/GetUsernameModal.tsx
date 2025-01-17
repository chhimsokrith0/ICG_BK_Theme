// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// interface GetUsernameModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const GetUsernameModal: React.FC<GetUsernameModalProps> = ({ isOpen, onClose }) => {
//     const [isMobileSelected, setIsMobileSelected] = useState(true);
//     const [contactNumber, setContactNumber] = useState("");
//     const [otp, setOtp] = useState("");

//     if (!isOpen) return null;

//     return ReactDOM.createPortal(
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[500]">
//             <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
//                 {/* Header */}
//                 <div className="text-center mb-6">
//                     <div className="flex justify-center items-center gap-4 mb-4">
//                         <img
//                             src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736151387/logo20240531045104748_vbckqe.gif"
//                             alt="BK8 Logo"
//                             className="h-12"
//                         />
//                     </div>
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                         Get Username
//                     </h2>
//                     <p className="text-gray-500">
//                         Enter your registered email address or contact number to receive
//                         instructions on how to reset your password.
//                     </p>
//                 </div>

//                 {/* Tab Toggle */}
//                 <div className="flex justify-center gap-4 mb-6">
//                     <button
//                         className={`px-6 py-2 rounded-full font-medium transition-all ${isMobileSelected
//                             ? "bg-orange-500 text-white shadow-md"
//                             : "bg-gray-100 text-gray-800 border border-gray-300"
//                             }`}
//                         onClick={() => setIsMobileSelected(true)}
//                     >
//                         Mobile
//                     </button>
//                     <button
//                         className={`px-6 py-2 rounded-full font-medium transition-all ${!isMobileSelected
//                             ? "bg-orange-500 text-white shadow-md"
//                             : "bg-gray-100 text-gray-800 border border-gray-300"
//                             }`}
//                         onClick={() => setIsMobileSelected(false)}
//                     >
//                         Email
//                     </button>
//                 </div>


//                 {/* Mobile Input */}
//                 {isMobileSelected && (
//                     <div className="mb-6">
//                         <label
//                             htmlFor="contactNumber"
//                             className="block text-sm font-medium text-gray-700 mb-2"
//                         >
//                             Enter your mobile number <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative mb-4">
//                             {/* Country Code Dropdown */}
//                             <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
//                                 <button
//                                     type="button"
//                                     className="flex items-center px-3 bg-gray-200 rounded-l-md focus:outline-none"
//                                 >
//                                     <img
//                                         src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
//                                         alt="Country Code"
//                                         className="h-4 w-4 mr-2"
//                                     />
//                                     <span className="text-sm text-gray-600">+60</span>
//                                     <svg
//                                         className="ml-2 w-4 h-4 text-gray-500"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         ></path>
//                                     </svg>
//                                 </button>
//                                 {/* Dropdown List */}
//                                 <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded-md shadow-md w-56 z-10 hidden group-hover:block">
//                                     <input
//                                         type="text"
//                                         placeholder="Search"
//                                         className="px-4 py-2 text-sm w-full border-b focus:outline-none"
//                                     />
//                                     <ul className="py-2 text-sm">
//                                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
//                                             <img
//                                                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/TH_uwz8wy.png"
//                                                 alt="Thailand"
//                                                 className="h-4 w-4 mr-2"
//                                             />
//                                             +66 Thailand
//                                         </li>
//                                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
//                                             <img
//                                                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/ID_ngtub3.png"
//                                                 alt="Indonesia"
//                                                 className="h-4 w-4 mr-2"
//                                             />
//                                             +62 Indonesia
//                                         </li>
//                                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
//                                             <img
//                                                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
//                                                 alt="Malaysia"
//                                                 className="h-4 w-4 mr-2"
//                                             />
//                                             +60 Malaysia
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 {/* Contact Number Input */}
//                                 <input
//                                     id="contactNumber"
//                                     type="text"
//                                     value={contactNumber}
//                                     onChange={(e) => setContactNumber(e.target.value)}
//                                     className="flex-1 px-4 py-2 border-l border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                                     placeholder="Contact Number"
//                                 />
//                             </div>
//                         </div>



//                         {/* Send To Dropdown */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="sendTo"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Send to
//                             </label>
//                             <select
//                                 id="sendTo"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                             >
//                                 <option>Please Select</option>
//                                 <option>Email</option>
//                                 <option>Mobile</option>
//                             </select>
//                         </div>

//                         {/* OTP Input */}
//                         <div className="mb-6">
//                             <label
//                                 htmlFor="otp"
//                                 className="block text-sm font-medium text-gray-700 mb-2"
//                             >
//                                 Enter the OTP
//                             </label>
//                             <div className="flex items-center">
//                                 <input
//                                     id="otp"
//                                     type="text"
//                                     value={otp}
//                                     onChange={(e) => setOtp(e.target.value)}
//                                     className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                                     placeholder="Enter OTP"
//                                 />
//                                 <button
//                                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-r-md hover:bg-gray-300"
//                                     disabled
//                                 >
//                                     Send OTP
//                                 </button>
//                             </div>
//                             <p className="text-sm text-gray-500 mt-2">
//                                 Did not receive OTP? Contact{" "}
//                                 <a
//                                     href="#"
//                                     className="text-blue-500 underline hover:text-blue-600"
//                                 >
//                                     Customer Service
//                                 </a>{" "}
//                                 for assistance.
//                             </p>
//                         </div>

//                         {/* Confirm and Cancel Buttons */}
//                         <div className="flex justify-between gap-4">
//                             <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
//                                 Confirm
//                             </button>
//                             <button
//                                 className="flex-1 px-4 py-2 bg-blue-200 text-blue-800 rounded-md font-medium hover:bg-blue-300"
//                                 onClick={onClose}
//                             >
//                                 Cancel
//                             </button>
//                         </div>

//                         <p className="text-sm text-center text-gray-500 mt-4">
//                             or return to{" "}
//                             <a
//                                 href="/login"
//                                 className="text-blue-500 underline hover:text-blue-600"
//                             >
//                                 Log in
//                             </a>
//                         </p>
//                     </div>
//                 )}




//             </div>
//         </div>,
//         document.body
//     );
// };

// export default GetUsernameModal;


import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import TabToggle from "./TabToggleProps";
import MobileInput from "./MobileInputProps";

interface GetUsernameModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetUsernameModal: React.FC<GetUsernameModalProps> = ({ isOpen, onClose }) => {
    const [isMobileSelected, setIsMobileSelected] = useState(true);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[500]">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
                <Header />
                <TabToggle isMobileSelected={isMobileSelected} setIsMobileSelected={setIsMobileSelected} />
                {isMobileSelected && <MobileInput onClose={onClose} />}
            </div>
        </div>,
        document.body
    );
};

export default GetUsernameModal;
