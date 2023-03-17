import React from "react";
import "./Headline.scss";

export default function Headline() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return (
        <div className="Headline">
            <p className="Disclaimer">
                Designed by Mark Alfred / Developed by Jacob Eisner
            </p>
            <div className="Title">
                <p className="Breaking-News">Breaking News:</p>
                <h1 className="Mark-Alfred">
                    <span>M</span>ARK <span>A</span>LFRED
                </h1>
                <p className="Title-Date">{formattedDate}</p>
            </div>
            <div className="Subtitle">
                <hr />
                <h2 className="Subtitle-Text">
                    News Editor, Photojournalist Now Has Website
                </h2>
                <h2 className="Subtitle-Text-Mobile">
                    News Editor, Photojournalist
                </h2>
                <hr />
            </div>
        </div>
    );
}
