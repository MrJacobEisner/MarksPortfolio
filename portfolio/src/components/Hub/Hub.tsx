import React, { useState } from "react";
import CustomCarousel from "./Carousel/CustomCarousel";
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
        {
            imageName:
                "UCPD drives across the sidewalk in front of Storke Tower.JPG",
            title: "UCPD drives across the sidewalk in front of Storke Tower",
        },
        {
            imageName:
                "A biker weaves through protestors at UC Santa Barbara.JPG",
            title: "A biker weaves through protestors at UC Santa Barbara",
        },
        {
            imageName:
                "Congressman Carbajal announces new legislation at UC Santa Barbara.JPG",
            title: "Congressman Carbajal announces new legislation at UC Santa Barbara",
        },
        {
            imageName:
                "Decommissioned oil tanks sit at UCSB’s Devereux Slough.JPG",
            title: "Decommissioned oil tanks sit at UCSB’s Devereux Slough",
        },
        {
            imageName:
                "Kristen Stewart is honored at the Santa Barbara International Film Festival.JPG",
            title: "Kristen Stewart is honored at the Santa Barbara International Film Festival",
        },
        {
            imageName:
                "NASA’s Orion spacecraft arrives at San Diego after a 1.4 million mile journey around the moon.JPG",
            title: "NASA’s Orion spacecraft arrives at San Diego after a 1.4 million mile journey around the moon",
        },
        {
            imageName:
                "Senator Padilla and Congressman Carbajal await the departure of Vice President Harris from Air Force Two.JPG",
            title: "Senator Padilla and Congressman Carbajal await the departure of Vice President Harris from Air Force Two",
        },
        {
            imageName:
                "Senator Padilla delivers remarks at Vandenberg Space Force Base.JPG",
            title: "Senator Padilla delivers remarks at Vandenberg Space Force Base",
        },
        {
            imageName:
                "SpaceX’s Falcon 9 rocket launches from Vandenberg Space Force Base.JPG",
            title: "SpaceX’s Falcon 9 rocket launches from Vandenberg Space Force Base",
        },
        {
            imageName: "UAW union members march for higher wages.JPG",
            title: "UAW union members march for higher wages",
        },
        {
            imageName:
                "UC San Diego works to construct a slew of new student residences.JPG",
            title: "UC San Diego works to construct a slew of new student residences",
        },
        {
            imageName:
                "Vice President Kamala Harris shoots a smile toward the press pool.JPG",
            title: "Vice President Kamala Harris shoots a smile toward the press pool",
        },
        // ...
    ];

    return (
        <div className="Hub">
            <div className="TabBar">
                <button
                    className={
                        toggleState === 1 ? "Button Button-Active" : "Button"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <p className="Tab">Gallery</p>
                </button>
                <button
                    className={
                        toggleState === 2 ? "Button Button-Active" : "Button"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <p className="Tab">About</p>
                </button>
                {/* <button
                    className={
                        toggleState === 3
                            ? "Button Button-Active"
                            : "Button"
                    }
                    onClick={() => toggleTab(3)}
                >
                    <p className="Tab">Contact</p>
                </button> */}
            </div>
            <div className={toggleState === 1 ? "Page Page-Active" : "Page"}>
                <CustomCarousel images={images} />
            </div>
            <div className={toggleState === 2 ? "Page Page-Active" : "Page"}>
                <div className="About">
                    <div className="Info">
                        <img
                            className="Mark"
                            src={require(`../../assets/other/MarkProfile.jpg`)}
                            alt=""
                        />
                        <div className="Contact">
                            <p>
                                Reach out at: <br />{" "}
                                <b>Markalfred@dailynexus.com</b>
                            </p>
                            <p>
                                Text and Signal: <br /> <b>(858) 413-7384</b>
                            </p>
                        </div>
                    </div>
                    <div className="Bio">
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
                className={toggleState === 3 ? "Page Page-Active" : "Page"}
            ></div>
        </div>
    );
};

export default Hub;
