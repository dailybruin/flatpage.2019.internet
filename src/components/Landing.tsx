import React from 'react';

type LandingProps = {
    imageURL: string;
}

const Landing: React.FC<LandingProps> = ({ imageURL }) => {
    return (
        <header style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `linear-gradient(transparent, transparent, #010000), url(${imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
        </header>
    );
}

export default Landing;