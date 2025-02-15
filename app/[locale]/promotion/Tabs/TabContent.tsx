import { motion } from "framer-motion"
import NewMemberTab from "./NewMemberTab"
import { useTranslations } from "next-intl"

const TabContent = ({ activeTab }: { activeTab: string }) => {
  const t = useTranslations("promotion")

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const renderContent = () => {
    switch (activeTab) {
      case "new_member":
        return <NewMemberTab />
      // Add other cases for other tabs
      default:
        return <div className="text-center">{t("defaultMessage")}</div>
    }
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      {renderContent()}
    </motion.div>
  )
}

export default TabContent

