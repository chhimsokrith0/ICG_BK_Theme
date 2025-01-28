'use client';

import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import BannerCarousel from "./BannerCarousel/Desktop/BannerCarousel";
import PromoCarousel from "./PromoCarousel/Desktop/PromoCarousel";
import AnnouncementBar from "./AnnouncementBar/Desktop/AnnouncementBar";
import LiveMatchesSection from "./LiveMatchesSection/Desktop/LiveMatchesSection";
import HowToRegister from "./HowToRegister/Desktop/HowToRegister";
import PopularGames from "./Game/Desktop/PopularGames";
import BestLiveCasinoGames from "./Game/Desktop/BestLiveCasinoGames";
import InstantGamesToPlay from "./Game/Desktop/InstantGamesToPlay";
import AppDownloadSection from "./AppDownloadSection/Desktop/AppDownloadSection";
import OurPartners from "./OurPartners/Desktop/OurPartners";
import Testimonials from "./Testimonials/Desktop/Testimonials";
import LatestNews from "./LatestNews/Desktop/LatestNews";
import PartnershipsAndAwards from "./PartnershipsAndAwards/Desktop/PartnershipsAndAwards";
import BannerCarouselMobile from "./BannerCarousel/Mobile/BannerCarouselMobile";
import JoinLoginButtons from "./BannerCarousel/Mobile/JoinLoginButtons";
import AnnouncementBarMobile from "./AnnouncementBar/Mobile/AnnouncementBarMobile";
import MobileMenuTab from "./Navbar/Mobile/MobileMenuTab";
import PromoMobile from "./promotion/PromoMobile";
import TestimonialsPage from "./TestimonialsPage/Mobile/TestimonialsPage";
import BlogSection from "./LatestNews/Mobile/BlogSection";
import AppPromoSection from "./AppDownloadSection/Mobile/AppPromoSection";
import PromoModal from "./PromoModal";
import LuckyWheel from "./LuckyWheel";
import { useSession } from "next-auth/react";
import WalletApplicationsMobile from "./WalletApplicationsMobile/WalletApplicationsMobile";


export default function HomeContent({ locale }: { locale: string }) {

    const { data: session } = useSession();

    // Animation variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div>
            <PromoModal />
            <LuckyWheel locale={locale} />
            {/* Desktop Version */}
            <div className="hidden lg:block">
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <BannerCarousel />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PromoCarousel />
                </motion.div>
                <AnnouncementBar />
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <LiveMatchesSection />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <HowToRegister />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PopularGames />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <BestLiveCasinoGames />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <InstantGamesToPlay />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <AppDownloadSection />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <OurPartners />
                </motion.div>
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <Testimonials />
                </motion.div>
                <LatestNews />
                <br />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PartnershipsAndAwards />
                </motion.div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden">
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    {session ? ""  : <BannerCarouselMobile />}
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    {session ? ""  : <JoinLoginButtons />}
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <AnnouncementBarMobile />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible" className="p-4">
                    { session ? <WalletApplicationsMobile /> : "" }
                </motion.div>
                <MobileMenuTab />
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PromoMobile />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PopularGames />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <BestLiveCasinoGames />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <InstantGamesToPlay />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <TestimonialsPage />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <BlogSection />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <AppPromoSection />
                </motion.div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
                    <PartnershipsAndAwards />
                </motion.div>
        
                
               
            </div>
        </div>
    );
}
