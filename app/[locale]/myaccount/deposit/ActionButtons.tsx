import React from "react";
import { useTranslations } from "next-intl";

const ActionButtons = () => {
    const t = useTranslations("myaccount.Deposit.ActionButtons");
    return (
        <div className="flex justify-left space-x-4 mt-4">
            <button className="bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-500">
                {t('submit')}
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">
                {t('uploadReceipt')}
            </button>
        </div>
    );
};

export default ActionButtons;
