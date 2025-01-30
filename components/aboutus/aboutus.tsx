'use client';
import React from 'react';
import Header from './Header';
import TabNavigation from './TabNavigation';
import OurMission from './OurMission';
import BuiltToEntertain from './BuiltToEntertain';
import BK8Story from './BK8Story';
import OurProviders from './OurProviders';

const Aboutus = () => {
    return (
        <div>
            <Header />
            <div className='container mx-auto p-6'>
                <TabNavigation />
                <OurMission />
                <BuiltToEntertain />
               
            </div>
            <BK8Story />
            <OurProviders />
        </div>
    )
}

export default Aboutus;