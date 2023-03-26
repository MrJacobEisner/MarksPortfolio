import React from "react";
import Byline from "./Byline/Byline";
import "./BylineSection.scss";

interface ImageObject {
    imageName: string;
    link: string;
}

const BylineSection = () => {
    const images: ImageObject[] = [
        {
            imageName: "DailyNexus.png",
            link: "poop.com",
        },
        {
            imageName: "PacificCoast.png",
            link: "poop.com",
        },
        {
            imageName: "SBIndependent.png",
            link: "poop.com",
        },
    ];

    return (
        <div className="BylineSection">
            <div className="Title">
                <hr />
                <h2>Bylines In</h2>
                <hr />
            </div>
            <div className="Bylines">
                {images.map((image) => (
                    <Byline image={image.imageName} link={image.link} />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default BylineSection;
