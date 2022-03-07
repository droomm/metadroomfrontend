import React, { } from "react";
import { Container } from './style';

const BackgroundVideo = () => {
    return <Container className='z-0 fixed  w-screen h-screen '>

        <video
            style={{ width: "99.6vw", height: "100vh", objectFit: "cover" }}
        // autoPlay loop muted preload="auto"
        >
            <source src='/videos/background.mp4' type="video/mp4" />
        </video>
    </Container>
}

export default BackgroundVideo;
