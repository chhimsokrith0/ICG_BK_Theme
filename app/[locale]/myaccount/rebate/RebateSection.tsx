'use client';

import React, { useState } from 'react';
import Tabs from './Tabs';
import RebateContent from './RebateContent';
import HistoryContent from './HistoryContent';

const RebateSection = () => {
    const [activeTab, setActiveTab] = useState('Rebate');

    const tabs = [
        { name: 'Rebate' },
        { name: 'History' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mx-2 h-full lg:max-w-5xl lg:mx-auto">
            {/* Tabs */}
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content */}
            {activeTab === 'Rebate' && <RebateContent />}
            {activeTab === 'History' && <HistoryContent />}
        </div>
    );
};

export default RebateSection;
