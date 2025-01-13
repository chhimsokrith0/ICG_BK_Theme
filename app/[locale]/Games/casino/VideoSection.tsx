import React from "react";

const VideoSection: React.FC = () => {
    return (
        <div
            className="mb-6"
            style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
            }}
        >
            <iframe
                allow="fullscreen; autoplay"
                allowFullScreen
                src="https://streamable.com/e/kof02y?autoplay=1&muted=1&controls=0"
                style={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                }}
            />
        </div>
    );
};

export default VideoSection;
