'use client';
import React, { useState } from 'react';
import CashierSection from './CashierSection';
import RewardSection from './RewardSection';
import ProfileSection from './ProfileSection';
import HistorySection from './HistorySection';
import ReferralSection from './ReferralSection';

const Sidebar: React.FC = () => {
    const [activeItem, setActiveItem] = useState('Deposit');

    return (
        <div className="w-64 bg-white shadow-lg rounded-lg p-4">
            <CashierSection/>
            <RewardSection />
            <ProfileSection/>
            <HistorySection/>
            <ReferralSection />
        </div>
    );
};

export default Sidebar;
