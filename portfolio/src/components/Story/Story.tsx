import React from "react";
import "./Story.scss";

interface StoryProps {
    image: string;
    creditName?: string;
    creditLink?: string;
    children: React.ReactNode;
}

const Story = (StoryProps: StoryProps) => {
    const { image, creditName, creditLink, children } = StoryProps;
    return (
        <div
            className="Story"
            style={{ backgroundImage: `url(../../assets/${image})` }}
        >
            <h2 className="Story-Title">{children}</h2>
            <a href={creditLink}>{creditName}</a>
        </div>
    );
};

export default Story;
