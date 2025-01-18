import NewMemberTab from "./NewMemberTab";

const TabContent = ({ activeTab }: { activeTab: string }) => {
    switch (activeTab) {
        case "new_member":
            return <NewMemberTab />;
        // Add other cases for other tabs
        default:
            return <div className="text-center">No content available</div>;
    }
};

export default TabContent;
