import NewMemberTab from "./NewMemberTab";
import { useTranslations } from "next-intl";

const TabContent = ({ activeTab }: { activeTab: string }) => {
    const t = useTranslations("promotion");
    switch (activeTab) {
        case "new_member":
            return <NewMemberTab />;
        // Add other cases for other tabs
        default:
            return <div className="text-center">{t("defaultMessage")}</div>;
    }
};

export default TabContent;
