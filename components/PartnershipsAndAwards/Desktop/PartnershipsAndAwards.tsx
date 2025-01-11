"use client";

import React from "react";

const PartnershipsAndAwards = () => {
    const partners = [
        {
            type: "Official Partner",
            name: "Burnley F.C.",
            year: "2023-2024",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513807/bfc_uwp4f5.svg",
        },
        {
            type: "Official Sponsor of the HSBC BWF World Tour Finals 2024",
            name: "",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513821/hsbc_bwf_kypkyc.png",
        },
        {
            type: "BK8 Brand Ambassador Philippines 2023 - 2024",
            name: "Manny Pacquiao",
            subTitle: "8 Division World Boxing Champion & Winner of 12 Major World Titles",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513834/sponsor-MP_yxu2in.png",
            signature: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513830/signature-MP_bc5uog.png",
        },
        {
            type: "Nominated for Innovation in Sports Betting",
            name: "",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513814/egr_nomination_xh1xoj.png",
        },
    ];

    const awards = [
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513783/award1_cgutjv.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513793/award4_omzelb.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513790/award3_bcvp1v.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513787/award2_rhico4.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513796/award5_zhwtgh.png",
        "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513803/award6_pfp3nd.png",
    ];

    const sponsorships = [
        {
            name: "Aston Villa F.C.",
            year: "2023 - 2024",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513778/aston-villa-fc_n6waqu.svg",
        },
        {
            name: "Crystal Palace F.C.",
            year: "2022 - 2023",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513811/crystal-palace-fc_rpxzrj.svg",
        },
        {
            name: "Huddersfield Town A.F.C.",
            year: "2021 - 2023",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513824/huddersfield-town-afc_od3ilw.svg",
        },
        {
            name: "Valencia C.F.",
            year: "2021 - 2022",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513837/valencia-cf_ipimq6.svg",
        },
        {
            name: "Athletic Club",
            year: "2021 - 2022",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513781/athletic-club_oym5cd.svg",
        },
        {
            name: "Villarreal C.F.",
            year: "2021 - 2022",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513841/villarreal-cf_uasmsz.svg",
        },
        {
            name: "Elche C.F.",
            year: "2021 - 2022",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513817/elche-cf_mxwj73.svg",
        },
        {
            name: "RCD Mallorca",
            year: "2021 - 2022",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736513827/rcd-mallorca_wdpycz.svg",
        },
    ];

    return (
        <div className="partnerships-section mx-auto max-w-[1200px] py-8 px-4">
            <div className="partners-grid grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {partners.map((partner, index) => (
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
                <p className="text-lg font-semibold mb-6">Award Nomination</p>
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
                <p className="text-lg font-semibold mb-6 text-center">Our Previous Sponsorships</p>
                <div className="sponsorships-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {sponsorships.map((sponsor, index) => (
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
