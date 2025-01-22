'use client';
import React, { useState } from 'react';
import WithdrawOptions from './WithdrawOptions';

const WithdrawOptionsWithPin = () => {
    const [selectedOption, setSelectedOption] = useState('');
   
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-2 ml-2">    
            <WithdrawOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>
    );
};

export default WithdrawOptionsWithPin;
