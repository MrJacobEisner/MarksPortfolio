import React from "react";
import "./Storyline.scss";

interface StorylineProps {
    image: string;
    header: string;
    credit: string;
    paragraph1: string;
    paragraph2: string;
    title: string;
    author: string;
    children: React.ReactNode;
}

const Storyline = (StorylineProps: StorylineProps) => {
    const {
        image,
        header,
        credit,
        paragraph1,
        paragraph2,
        title,
        author,
        children,
    } = StorylineProps;

    return (
        <div className="Storyline">
            <div
                className="Headline"
                style={{
                    background: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.3) 0%,
                        rgba(57, 57, 57, 0.3) 41.67%,
                        rgba(255, 255, 255, 0.2) 77.08%,
                        #ffffff 100%
                    ), url(${image})`,
                }}
            >
                <h2>{header}</h2>
                <p>{credit}</p>
            </div>
            <div className="Paragraphs">
                <p>{paragraph1}</p>
                <p>{paragraph2}</p>
            </div>
            <div className="Series">
                <div className="Title">
                    <h2>{title}</h2>
                    <p>By: {author}</p>
                </div>
                <div className="Sub-Stories">{children}</div>
            </div>
        </div>
    );
};

export default Storyline;
