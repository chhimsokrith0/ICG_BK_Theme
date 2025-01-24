import React from "react";
import ProfileDropdown from "./ProfileDropdown";
import MessageDropdown from "./MessageDropdown";
import WalletInfo from "./WalletInfo";
import ActionButtonsDropdown from "./ActionButtonsDropdown";

const WalletHeader = () => {
    return (
        <div className="flex items-center justify-between rounded-lg relative">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <ProfileDropdown />
                <MessageDropdown />
                <WalletInfo />

                 {/* Right Section */}
            <ActionButtonsDropdown />
            </div>

           
        </div>
    );
};

export default WalletHeader;
