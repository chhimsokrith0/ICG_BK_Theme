import { useTranslations } from "next-intl";
import React from "react";
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
import PromoModal from "./PromoModal";
import LuckyWheel from "./LuckyWheel";

export default function HomeContent({ locale }: { locale: string }) {
    const t = useTranslations();
    return (
        <div>  
            <PromoModal />
            <LuckyWheel />
            <div className="hidden lg:block">
                <BannerCarousel />
                <br />
                <PromoCarousel />
                <AnnouncementBar />
                <br />
                <LiveMatchesSection />
                <br />
                <HowToRegister />
                <br />
                <PopularGames />
                <br />
                <BestLiveCasinoGames />
                <br />
                <InstantGamesToPlay />
                <br />
                <AppDownloadSection />
                <br />
                <OurPartners />
                <br />
                <Testimonials />
                <LatestNews />
                <br />
                <PartnershipsAndAwards />
            </div>
            <div className="lg:hidden">
                <BannerCarouselMobile />
                <JoinLoginButtons />
                <AnnouncementBarMobile />
                <MobileMenuTab />
            </div>

        </div>
    );
}