import React from "react";

export default function Headline() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return (
        <div className="Headline">
            <div className="Headline-Name">
                <h1 className="Headline-Name-Text">Mark Alfred</h1>
            </div>
            <div className="Headline-Decals">
                <p className="Headline-Breaking">Breaking</p>
                <div className="Headline-Line"></div>
                <p className="Headline-Date">{formattedDate}</p>
            </div>
            <div className="Headline-Blurb">
                <h2 className="Headline-Blub-Text">
                    News Editor, Photojournalist Now Has Website
                </h2>
            </div>
        </div>
    );
}
