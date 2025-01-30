"use client";

import React from "react";
import { useTranslations } from "next-intl";

const PartnershipsAndAwards = () => {
    const t = useTranslations("PartnershipAndAwards");


    const Partners = t.raw('partners')

    const partners = Partners.map((partners: any) => ({
        type: partners.type,
        name: partners.name,
        year: partners.year,
        image: partners.image
    }));

    const awards = [
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513783/award1_cgutjv.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513793/award4_omzelb.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513790/award3_bcvp1v.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513787/award2_rhico4.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513796/award5_zhwtgh.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513803/award6_pfp3nd.png",
    ];


    const Sponsorships = t.raw('sponsorships');

    const sponsorships = Sponsorships.map((sponsorships: any) => ({
        name: sponsorships.name,
        year: sponsorships.year,
        image: sponsorships.image
    }));

    

    return (
        <div className="partnerships-section mx-auto max-w-[1200px] py-8 px-4">
            <div className="partners-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {partners.map((partner: any, index: number) => (
                    <div key={index} className="partner-box text-center">
                        <p className="text-sm font-semibold mb-4">{partner.type}</p>
                        <img
                            src={partner.image}
                            alt={partner.name}
                            className="mx-auto mb-4 h-[100px] object-contain"
                        />
                        {partner.name && <p className="font-semibold">{partner.name}</p>}
                        {partner.subTitle && (
                            <p className="text-sm text-gray-600 mt-2">{partner.subTitle}</p>
                        )}
                        {partner.signature && (
                            <img
                                src={partner.signature}
                                alt={`${partner.name} Signature`}
                                className="mx-auto mt-2"
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="awards-section text-center mb-12">
                <p className="text-lg font-semibold mb-6">{ t('awardNomination') }</p>
                <div className="awards-grid grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {awards.map((award, index) => (
                        <img
                            key={index}
                            src={award}
                            alt={`Award ${index + 1}`}
                            className="mx-auto h-[80px] object-contain"
                        />
                    ))}
                </div>
            </div>

            <div className="sponsorships-section">
                <p className="text-lg font-semibold mb-6 text-center">  { t('ourPreviousSponsorships') }</p>
                <div className="sponsorships-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {sponsorships.map((sponsor: any, index: number) => (
                        <div key={index} className="sponsor-box text-center">
                            <img
                                src={sponsor.image}
                                alt={sponsor.name}
                                className="mx-auto mb-2 h-[80px] object-contain"
                            />
                            <p className="font-semibold text-sm">{sponsor.name}</p>
                            <p className="text-xs text-gray-500">{sponsor.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnershipsAndAwards;
