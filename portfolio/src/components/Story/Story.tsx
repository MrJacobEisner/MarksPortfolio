import React from "react";
import "./Story.scss";

interface StoryProps {
    image: string;
    creditName?: string;
    link: string;
    children: React.ReactNode;
    type?: string;
}

const Story = (StoryProps: StoryProps) => {
    const { image, creditName, link, children, type } = StoryProps;
    return (
        <div className="Story">
            <a className="Story" href={link}>
                <img src={require(`../../assets/${image}`)} alt="" />
                <div
                    className={
                        type === "Low" ? "Story-Text Low" : "Story-Text High"
                    }
                >
                    <h2 className="Story-Title">{children}</h2>
                    <p>{creditName}</p>
                </div>
            </a>
        </div>
    );
};

export default Story;
