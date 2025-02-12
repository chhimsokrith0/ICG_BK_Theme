import React from "react";
import { VideoProps } from "@/types";

const VideoCard: React.FC<{ video: VideoProps }> = ({ video }) => (
    <div className="relative w-full h-[350px] flex bg-gradient-to-t from-black/60 to-transparent rounded-lg overflow-hidden shadow-lg">
        <div className="flex-1 bg-cover bg-center relative rounded-lg overflow-hidden" style={{ backgroundImage: `url('${video.imgSrc}')` }}>
            <div className="absolute inset-0 flex items-end p-4 ">
                <div>
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <button className="mt-2 bg-orange-500 py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition">Bet Now</button>
                </div>
            </div>
        </div>
        <div className="flex-1 relative p-4 ">
            <iframe
                src={`${video.videoSrc}&autoplay=1&controls=0&mute=1`}
                title={`partner-video-${video.title}`}
                className="w-full h-full rounded-xl"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                    pointerEvents: "none",
                   
                }}
            ></iframe>
        </div>

    </div>
);

export default VideoCard;
