import React from "react";
import "./Story.scss";

function Story(props: any) {
    return (
        <div
            className="Story"
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <h2 className="Story-Title">{props.children}</h2>
        </div>
    );
}

export default Story;
