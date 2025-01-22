const DepositTabs = ({ selectedTab, setSelectedTab }: { selectedTab: string; setSelectedTab: (tab: string) => void }) => {
    const tabs = [
        { name: 'Normal Deposit', description: '(5 minutes)' },
        { name: 'Fast Deposit', description: '(1 minute)' },
        { name: 'Crypto Deposit', description: '(15 minutes)' },
    ];

    return (
        <div className="flex mb-6 space-x-2">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    className={`flex-1 text-center py-2 rounded-t-md ${
                        selectedTab === tab.name
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold'
                            : 'bg-gray-200 text-gray-600'
                    }`}
                    onClick={() => setSelectedTab(tab.name)}
                >
                    <div className="flex items-center justify-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 50 50"
                        >
                            <path d="..." />
                        </svg>
                        <span>{tab.name}</span>
                    </div>
                    <span className="text-xs font-normal">{tab.description}</span>
                </button>
            ))}
        </div>
    );
};

export default DepositTabs;
