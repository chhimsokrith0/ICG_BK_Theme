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
            <CashierSection activeItem={activeItem} setActiveItem={setActiveItem} />
            <RewardSection activeItem={activeItem} setActiveItem={setActiveItem} />
            <ProfileSection activeItem={activeItem} setActiveItem={setActiveItem} />
            <HistorySection activeItem={activeItem} setActiveItem={setActiveItem} />
            <ReferralSection />
        </div>
    );
};

export default Sidebar;
