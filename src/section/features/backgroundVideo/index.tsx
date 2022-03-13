import React from "react";

const BackGroundVideo = () => {
    return <div className=' w-full h-full absolute z-0'>
        <video
            style={{ width: "99.6vw", height: "100vh", objectFit: "cover" }}
            autoPlay loop muted preload="auto"
        >
            <source src='/videos/feature.mp4' type="video/mp4" />
        </video>
    </div>
}

export default BackGroundVideo;
