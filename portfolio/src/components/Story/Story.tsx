import React from "react";
import "./Story.scss";

interface StoryProps {
    image: string;
    link: string;
}

const Story = (StoryProps: StoryProps) => {
    const { image, link } = StoryProps;
    return (
        <div className="Story">
            <a
                className="Story"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={require(`../../assets/stories/${image}`)}
                    alt=""
                    loading="lazy"
                />
            </a>
        </div>
    );
};

export default Story;
