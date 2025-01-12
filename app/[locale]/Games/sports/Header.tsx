import { useTranslations } from "next-intl";
const Header = () => {
    const t = useTranslations("Games.sports.Header");
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736599101/sports-bn_r0punv.jpg"
                alt="Sportsbook Banner"
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    {t("title")}
                </h1>
                <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
                    {t("subtitle")}
                </p>
                <p className="text-md md:text-lg mt-2 drop-shadow-md">
                    {t("description")}
                </p>
            </div>
        </div>
    );
};

export default Header;
