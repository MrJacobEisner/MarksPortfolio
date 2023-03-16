import React, { useState } from "react";
import CustomCarousel from "../Carousel/CustomCarousel";
import "./Hub.scss";

interface ImageObject {
    imageName: string;
    title: string;
}

const Hub = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    const images: ImageObject[] = [
        { imageName: "Image1.jpeg", title: "Image 1" },
        { imageName: "Image2.jpeg", title: "Image 2" },
        // ...
    ];

    return (
        <div className="Hub">
            <div className="Hub-TabBar">
                <button onClick={() => toggleTab(1)}>
                    <p className="Hub-Tab">Gallery</p>
                </button>
                <button onClick={() => toggleTab(2)}>
                    <p className="Hub-Tab">Content</p>
                </button>
                <button onClick={() => toggleTab(3)}>
                    <p className="Hub-Tab">About</p>
                </button>
            </div>
            <div
                className={
                    toggleState === 1 ? "Hub-Page Hub-Page-Active" : "Hub-Page"
                }
            >
                <CustomCarousel images={images} />
            </div>
            <div
                className={
                    toggleState === 2 ? "Hub-Page Hub-Page-Active" : "Hub-Page"
                }
            >
                <div className="Hub-About-Content">
                    <div className="Hub-About-Info">
                        <img className="Hub-Mark" src="" alt="" />
                        <p>
                            Reach out at: <br />{" "}
                            <b>Markalfred@dailynexus.com</b>
                        </p>
                        <p>
                            Text and Signal: <br /> <b>(858) 413-7384</b>
                        </p>
                    </div>
                    <div className="Hub-About-Bio">
                        <p>
                            <b>Mark Alfred</b> is an award-winning news editor
                            and photojournalist currently writing for the{" "}
                            <i>Daily Nexus </i> and{" "}
                            <i>Pacific Coast Business Times.</i>
                        </p>
                        <p>
                            He has bylines in the Pacific Coast Business Times,
                            Daily Nexus and Santa Barbara Independent; worked
                            freelance for the San Diego Union Tribune, Los
                            Angeles Times and Getty Images; and interned with
                            the San Diego County Board of Supervisors.
                        </p>
                        <p>
                            He holds a degree in Political Science from San
                            Diego Mesa College and is perusing a Bachelors in
                            American Politics with a minor in Labor Studies at
                            UC Santa Barbara.
                        </p>
                        <p>
                            He has covered or photographed President Biden, Vice
                            President Harris, Governor Newsom, Reps. Salud
                            Carbajal, Marjorie Taylor Greene and others.
                        </p>
                        <p>
                            His reporting on UCSB’s plight to construct a
                            massive student dormitory lacking windows in
                            bedrooms won Best News Series at the 2023 California
                            College Media Association.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={
                    toggleState === 3 ? "Hub-Page Hub-Page-Active" : "Hub-Page"
                }
            ></div>
        </div>
    );
};

export default Hub;
