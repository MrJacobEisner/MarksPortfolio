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
            link: "https://dailynexus.com/2022-11-23/organizers-liberate-dlg-dining-commons-offering-free-meals-to-students/",
        },
        {
            imageName: "PacificCoast.png",
            link: "https://www.pacbiztimes.com/2023/02/17/amgens-150-million-investment-aims-to-scale-diversify-middle-market-business/#:~:text=By%20Mark%20Alfred%20Special%20to%20the%20Business%20Times,transform%20middle-market%20companies%20into%20certified%20minority-owned%20business%20enterprises.",
        },
        {
            imageName: "SBIndependent.png",
            link: "https://www.independent.com/2022/06/14/goleta-starbucks-employees-seek-to-unionize/",
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
