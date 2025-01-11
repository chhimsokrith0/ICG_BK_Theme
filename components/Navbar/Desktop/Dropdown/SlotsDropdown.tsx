

import React from "react";

export default function SlotsDropdown() {
    const sportsOptions = [
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174713/slot-ygr_rdcnlz.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174712/slot-ygg_whmuib.png", badge: "New" },

        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174690/slot-vp_b6fc8p.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174689/slot-sw_lrztyf.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174683/slot-rt_kxytpf.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174671/slot-rg_qzc7sk.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174670/slot-r88_rxi8wk.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174669/slot-ps_uzvvi2.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174668/slot-mg_le2dsf.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174667/slot-jili_rllhe6.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174665/slot-jdb_sh4xq3.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174664/slot-hc_q7hv87.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174663/slot-hb_cobu6g.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174662/slot-gp_gupzie.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174661/slot-fs_akijjt.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174660/slot-fc_vcqegj.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174659/slot-exs_hdmbcd.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174658/slot-ep_xdnoj2.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174657/slot-dragoon-soft_dx6m6x.png", },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174656/slot-cq9_dtzqqs.png", },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174655/slot-ap_fnyt9h.png",  },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174655/slot-ag_vqs1z8.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174654/sg_zcbwom.png",  },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174653/pp_ueh6ba.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174652/pgsoft_wuiway.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174651/pg_ayeutv.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/nextspin_kkapvz.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/funkygames_eclias.png", badge: "New" },
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/joker_tpr2kv.png", },
    ];

    return (
        <div className="absolute w-screen top-[0px] left-[-500px] w-full bg-blue-900 bg-opacity-90 shadow-lg py-6 px-8 justify-items-center">
            <div className="grid grid-cols-8 gap-6">
                {sportsOptions.map((option, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center space-y-3 text-white hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={option.image}
                            alt={option.name}
                            className="w-30 h-32 rounded-lg shadow-lg object-cover"
                        />
                        <div className="font-medium text-white text-center">{option.name}</div>
                        {option.badge && (
                            <span
                                className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${option.badge === "New"
                                        ? "bg-red-500 text-white"
                                        : "bg-yellow-500 text-black"
                                    }`}
                            >
                                {option.badge}
                            </span>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
