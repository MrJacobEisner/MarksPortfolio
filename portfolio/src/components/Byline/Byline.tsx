import React from "react";
import "./Byline.scss";

interface BylineProps {
    logo: string;
    header: string;
    image: string;
    creditName?: string;
    creditLink?: string;
    children: React.ReactNode;
}

const Byline = (BylineProps: BylineProps) => {
    const { logo, header, image, creditName, creditLink, children } =
        BylineProps;
    return (
        <div className="Byline">
            <img
                className="Byline-Logo"
                src={require(`../../assets/${logo}`)}
                alt=""
            />
            <h2 className="Byline-Header">{header}</h2>
            <img
                className="Byline-Image"
                src={require(`../../assets/${image}`)}
                alt=""
            />
            <a className="Byline-Credit" href={creditLink}>
                {creditName}
            </a>
            {children}
        </div>
    );
};

export default Byline;
