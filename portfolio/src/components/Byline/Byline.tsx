import React from "react";
import "./Byline.scss";

interface BylineProps {
    image: string;
    link: string;
}

const Byline = (BylineProps: BylineProps) => {
    const { image, link } = BylineProps;
    return (
        <div className="Byline">
            <a href={link}>
                <img src={require(`../../assets/${image}`)} alt="" />
            </a>
        </div>
    );
};

export default Byline;
