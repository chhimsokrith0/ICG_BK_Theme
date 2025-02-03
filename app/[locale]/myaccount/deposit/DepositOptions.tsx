import React, { useState } from 'react';
import DepositOptionsSelection from './DepositOptionsSelection';
import BankSelection from './BankSelection';
import WingBankDetails from './WingBankDetails';
import { useTranslations } from 'next-intl';


const DepositOptions = () => {
    const t = useTranslations('myaccount.Deposit.DepositOptionsSelection');
    const [selectedOption, setSelectedOption] = useState(t('depositOptions.0.name'));
    const [selectedBank, setSelectedBank] = useState('');

    const BankT = useTranslations('myaccount.Deposit.BankSelection');

    return (
        <div>
            <DepositOptionsSelection
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            {selectedOption === t('depositOptions.0.name') && (
                <BankSelection
                    selectedBank={selectedBank}
                    setSelectedBank={setSelectedBank}
                />
            )}
            {selectedBank === BankT('banks.0.name') && <WingBankDetails />}
            {selectedBank === BankT('banks.1.name') && <WingBankDetails />}
            {selectedBank === BankT('banks.2.name') && <WingBankDetails />}
        </div>
    );
};

export default DepositOptions;
