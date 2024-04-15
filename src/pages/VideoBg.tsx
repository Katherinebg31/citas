import React from 'react';

const VideoBg = () => {
    return (
        <video autoPlay muted loop id="myVideo" className="video-bg">
            <source src="/videos/video1.mp4" type="video/mp4" />
            {/* También puedes agregar otros formatos de video aquí */}
        </video>
    );
};

export default VideoBg;
