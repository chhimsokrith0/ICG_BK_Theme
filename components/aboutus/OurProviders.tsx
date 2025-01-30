import React from "react";

const providerLogos = [
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144854/bti_so4fu6.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144871/ygr_v2wxzi.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144870/wm_xypgvb.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144869/tf_rnqcl0.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144869/spb_akhmkc.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144868/sg_ay0mt8.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144867/redtiger_zetsvz.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144867/sa_gejcko.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144866/qq_itnmep.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144865/pp_rioqqq.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144865/nextspin_brlemv.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144864/microgaming_ampztn.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144863/mega_dj5cpd.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144861/jili_dgnnm0.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144862/maxbet_kcgmdx.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144861/joker_clhqj5.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144860/ime_dqvm6h.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144860/fc_jnzl0k.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144860/hc_xlroo4.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144859/gameplay_xvzxpy.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144859/funky_a7e43v.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144858/evo_a2fj79.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144857/ebet_xil8gb.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144856/dreamgaming_sfwdn3.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144854/cq9_y15uwj.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144854/allbet_ti1fzb.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144854/asiagaming_vo8ys6.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144853/ae_d6axfq.svg",
    "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738144854/cmd_qnyvqt.svg",
];

const OurProviders: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-gray-900">Our Providers</h2>
            </div>

            {/* Providers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                {providerLogos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <img src={logo} alt="Provider Logo" className="h-16 w-auto object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurProviders;
